/**
 * Gerenciador de Tema (Claro/Escuro)
 * Permite alternar entre modos e salva a preferência no localStorage.
 */

const temaEngine = {
    temaAtual: 'dark', // Padrão
    storageKey: 'vsc_tema_pref',
    btnTema: null,

    init() {
        // Carrega a preferência
        const prefSalva = localStorage.getItem(this.storageKey);
        if (prefSalva) {
            this.temaAtual = prefSalva;
        }
        
        // Aplica o tema inicial
        this.aplicarTema(this.temaAtual);
        
        // Cria o botão de toggle na UI
        this.criarBotaoUI();
    },

    aplicarTema(tema) {
        if (tema === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        this.temaAtual = tema;
        
        if (this.btnTema) {
            this.atualizarIconeBotao();
        }
    },

    toggleTema() {
        const novoTema = this.temaAtual === 'light' ? 'dark' : 'light';
        this.aplicarTema(novoTema);
        localStorage.setItem(this.storageKey, novoTema);
        
        // Toca um pequeno efeito sonoro (se somEngine existir)
        if (typeof somEngine !== 'undefined' && !somEngine.mutado && somEngine.ctx) {
            const os = somEngine.ctx.createOscillator();
            const gn = somEngine.ctx.createGain();
            os.type = 'sine';
            os.frequency.setValueAtTime(novoTema === 'light' ? 600 : 400, somEngine.ctx.currentTime);
            os.frequency.exponentialRampToValueAtTime(novoTema === 'light' ? 800 : 200, somEngine.ctx.currentTime + 0.1);
            gn.gain.setValueAtTime(0.05, somEngine.ctx.currentTime);
            gn.gain.exponentialRampToValueAtTime(0.001, somEngine.ctx.currentTime + 0.1);
            os.connect(gn);
            gn.connect(somEngine.masterGain);
            os.start();
            os.stop(somEngine.ctx.currentTime + 0.1);
        }
    },

    criarBotaoUI() {
        // Verifica se já existe (pra evitar duplicação)
        if (document.getElementById('btn-tema-global')) return;

        // Container flutuante global
        let container = document.getElementById('controles-globais');
        if (!container) {
            container = document.createElement('div');
            container.id = 'controles-globais';
            container.className = 'controles-globais';
            document.body.appendChild(container);
        }

        this.btnTema = document.createElement('button');
        this.btnTema.id = 'btn-tema-global';
        this.btnTema.className = 'btn-controle-global';
        this.btnTema.title = "Alternar Tema";
        this.btnTema.onclick = () => this.toggleTema();
        
        this.atualizarIconeBotao();
        
        // Adiciona ao container (inserimos no início para ficar antes do botão de som, se existir)
        container.insertBefore(this.btnTema, container.firstChild);
    },
    
    atualizarIconeBotao() {
        this.btnTema.innerHTML = this.temaAtual === 'light' ? '🌙' : '☀️';
    }
};

// Inicializa assim que o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    temaEngine.init();
});
