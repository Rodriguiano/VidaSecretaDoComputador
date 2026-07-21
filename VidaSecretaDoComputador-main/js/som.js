/* =====================================================
   SISTEMA DE ÁUDIO E SOM (Web Audio API)
   Vida Secreta do Computador
===================================================== */

const somEngine = {
    ctx: null,
    ativo: true,
    musicaTocando: false,
    intervaloMusica: null,
    notaMusicaAtual: 0,

    init() {
        const salvo = localStorage.getItem("vidaSecretaSomAtivo");
        if (salvo !== null) {
            this.ativo = JSON.parse(salvo);
        }

        const obterContexto = () => {
            if (!this.ctx) {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) {
                    this.ctx = new AudioCtx();
                }
            }
            if (this.ctx && this.ctx.state === "suspended") {
                this.ctx.resume();
            }
        };

        window.addEventListener("click", () => obterContexto(), { once: true });
        window.addEventListener("keydown", () => obterContexto(), { once: true });

        document.addEventListener("DOMContentLoaded", () => {
            this.criarBotaoSom();
            this.adicionarSonsGlobais();
            if (this.ativo) {
                this.iniciarMusicaFundo();
            }
        });
    },

    obterAudioContext() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) {
                this.ctx = new AudioCtx();
            }
        }
        if (this.ctx && this.ctx.state === "suspended") {
            this.ctx.resume();
        }
        return this.ctx;
    },

    alternarSom() {
        this.ativo = !this.ativo;
        localStorage.setItem("vidaSecretaSomAtivo", JSON.stringify(this.ativo));
        this.atualizarBotaoSom();

        if (this.ativo) {
            this.iniciarMusicaFundo();
            this.tocarClique();
        } else {
            this.pararMusicaFundo();
        }
    },

    criarBotaoSom() {
        if (document.getElementById("btnToggleSom")) return;

        const btn = document.createElement("button");
        btn.id = "btnToggleSom";
        btn.className = "botao-som-flutuante";
        btn.setAttribute("aria-label", "Alternar som");
        btn.onclick = (e) => {
            e.stopPropagation();
            this.alternarSom();
        };

        document.body.appendChild(btn);
        this.atualizarBotaoSom();
    },

    atualizarBotaoSom() {
        const btn = document.getElementById("btnToggleSom");
        if (btn) {
            if (this.ativo) {
                btn.innerHTML = "🔊 <span class='texto-som'>Som ON</span>";
                btn.classList.remove("som-desativado");
                btn.title = "Desativar Som";
            } else {
                btn.innerHTML = "🔇 <span class='texto-som'>Som OFF</span>";
                btn.classList.add("som-desativado");
                btn.title = "Ativar Som";
            }
        }
    },

    adicionarSonsGlobais() {
        document.body.addEventListener("click", (e) => {
            const alvo = e.target.closest("button, .card-personagem, .alternativa, a, .botao-principal, .botao-secundario");
            if (alvo && alvo.id !== "btnToggleSom") {
                this.tocarClique();
            }
        });
    },

    // ==========================================
    // EFEITOS SONOROS (SFX)
    // ==========================================

    tocarClique() {
        if (!this.ativo) return;
        const ctx = this.obterAudioContext();
        if (!ctx) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.05);

        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.05);
    },

    tocarInicio() {
        if (!this.ativo) return;
        const ctx = this.obterAudioContext();
        if (!ctx) return;

        const notas = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
        notas.forEach((freq, index) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "triangle";
            osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.08);

            gain.gain.setValueAtTime(0.2, ctx.currentTime + index * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + index * 0.08 + 0.15);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime + index * 0.08);
            osc.stop(ctx.currentTime + index * 0.08 + 0.15);
        });
    },

    tocarDialogo() {
        if (!this.ativo) return;
        const ctx = this.obterAudioContext();
        if (!ctx) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(800 + Math.random() * 200, ctx.currentTime);

        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.04);
    },

    tocarSucesso() {
        if (!this.ativo) return;
        const ctx = this.obterAudioContext();
        if (!ctx) return;

        // Arpejo de vitória/acerto C5, E5, G5, C6
        const notas = [523.25, 659.25, 783.99, 1046.50];
        notas.forEach((freq, index) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.09);

            gain.gain.setValueAtTime(0.25, ctx.currentTime + index * 0.09);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + index * 0.09 + 0.25);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime + index * 0.09);
            osc.stop(ctx.currentTime + index * 0.09 + 0.25);
        });
    },

    tocarErro() {
        if (!this.ativo) return;
        const ctx = this.obterAudioContext();
        if (!ctx) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(180, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(110, ctx.currentTime + 0.25);

        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.25);
    },

    tocarVirus() {
        if (!this.ativo) return;
        const ctx = this.obterAudioContext();
        if (!ctx) return;

        // Alerta sombrio estilo chefão vírus
        const freqs = [150, 140, 130, 120];
        freqs.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "square";
            osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);

            gain.gain.setValueAtTime(0.18, ctx.currentTime + i * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.18);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime + i * 0.1);
            osc.stop(ctx.currentTime + i * 0.1 + 0.18);
        });
    },

    tocarVitoria() {
        if (!this.ativo) return;
        const ctx = this.obterAudioContext();
        if (!ctx) return;

        // Fanfarra de finalização do jogo
        const notas = [
            { f: 392.00, d: 0.15, t: 0.00 }, // G4
            { f: 523.25, d: 0.15, t: 0.15 }, // C5
            { f: 659.25, d: 0.15, t: 0.30 }, // E5
            { f: 783.99, d: 0.30, t: 0.45 }, // G5
            { f: 659.25, d: 0.15, t: 0.80 }, // E5
            { f: 783.99, d: 0.15, t: 0.95 }, // G5
            { f: 1046.50, d: 0.60, t: 1.10 } // C6
        ];

        notas.forEach((n) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "triangle";
            osc.frequency.setValueAtTime(n.f, ctx.currentTime + n.t);

            gain.gain.setValueAtTime(0.28, ctx.currentTime + n.t);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + n.t + n.d + 0.1);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime + n.t);
            osc.stop(ctx.currentTime + n.t + n.d + 0.1);
        });
    },

    tocarTransicao() {
        if (!this.ativo) return;
        const ctx = this.obterAudioContext();
        if (!ctx) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.12);

        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.12);
    },

    // ==========================================
    // MÚSICA DE FUNDO SINTETIZADA (AMBIENT SYNTH)
    // ==========================================

    iniciarMusicaFundo() {
        if (this.intervaloMusica || !this.ativo) return;

        // Notas da música ambiente relaxante (frequências Hz)
        const melodia = [
            261.63, 329.63, 392.00, 523.25,
            392.00, 329.63, 440.00, 349.23,
            293.66, 349.23, 392.00, 440.00,
            392.00, 349.23, 329.63, 293.66
        ];

        this.notaMusicaAtual = 0;
        this.musicaTocando = true;

        this.intervaloMusica = setInterval(() => {
            if (!this.ativo || !this.musicaTocando) return;
            const ctx = this.obterAudioContext();
            if (!ctx) return;

            const freq = melodia[this.notaMusicaAtual];
            this.notaMusicaAtual = (this.notaMusicaAtual + 1) % melodia.length;

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, ctx.currentTime);

            // Volume suave para música de fundo
            gain.gain.setValueAtTime(0.025, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0005, ctx.currentTime + 0.5);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + 0.5);
        }, 600);
    },

    pararMusicaFundo() {
        if (this.intervaloMusica) {
            clearInterval(this.intervaloMusica);
            this.intervaloMusica = null;
        }
        this.musicaTocando = false;
    }
};

// Funções atalho globais
function tocarClique() { somEngine.tocarClique(); }
function tocarInicio() { somEngine.tocarInicio(); }
function tocarDialogo() { somEngine.tocarDialogo(); }
function tocarSucesso() { somEngine.tocarSucesso(); }
function tocarErro() { somEngine.tocarErro(); }
function tocarVirus() { somEngine.tocarVirus(); }
function tocarVitoria() { somEngine.tocarVitoria(); }
function tocarTransicao() { somEngine.tocarTransicao(); }
function alternarSom() { somEngine.alternarSom(); }

// Inicializa o engine de som
somEngine.init();
