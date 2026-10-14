/* =====================================================
   DESAFIOS COM TAXONOMIA DE BLOOM
===================================================== */

let perguntaAtualIndice = 0;
let acertosQuiz = 0;
let tempoRestante = 45;
let intervaloQuiz = null;

const niveisBloom = [
    { nome: "Lembrar", emoji: "🧠", explicacao: "recuperar um conceito essencial" },
    { nome: "Entender", emoji: "💬", explicacao: "explicar uma ideia com suas palavras" },
    { nome: "Aplicar", emoji: "🛠️", explicacao: "usar o conhecimento em uma situação" },
    { nome: "Analisar", emoji: "🔍", explicacao: "relacionar causas e consequências" },
    { nome: "Avaliar", emoji: "⚖️", explicacao: "justificar uma decisão técnica" },
    { nome: "Criar", emoji: "🚀", explicacao: "propor uma solução para um problema" }
];

function iniciarQuiz() {
    const curiosidade = document.getElementById("areaCuriosidade");
    const quiz = document.getElementById("areaQuiz");
    if (curiosidade) curiosidade.classList.add("escondido");
    if (quiz) quiz.classList.remove("escondido");
    perguntaAtualIndice = 0;
    acertosQuiz = 0;
    mostrarPergunta();
}

function obterPerguntasPersonagem() {
    if (personagemAtual && Array.isArray(personagemAtual.perguntas) && personagemAtual.perguntas.length > 0) {
        return personagemAtual.perguntas;
    }
    return [{
        pergunta: personagemAtual.pergunta || "Qual é a função deste componente?",
        alternativas: personagemAtual.alternativas || ["Opção A", "Opção B", "Opção C"],
        correta: personagemAtual.correta !== undefined ? personagemAtual.correta : 0
    }];
}

function iniciarCronometro() {
    clearInterval(intervaloQuiz);
    tempoRestante = perguntaAtualIndice === 0 ? 30 : 45;
    atualizarCronometro();
    intervaloQuiz = setInterval(() => {
        tempoRestante--;
        atualizarCronometro();
        if (tempoRestante <= 0) {
            clearInterval(intervaloQuiz);
            const feedback = document.getElementById("feedbackQuiz");
            if (feedback) feedback.textContent = "⏱️ O tempo acabou. Revise a explicacao e avance quando estiver pronto.";
            document.querySelectorAll("#alternativasQuiz .alternativa").forEach(botao => botao.disabled = true);
            mostrarFeedbackPergunta(obterPerguntasPersonagem()[perguntaAtualIndice], -1);
            const botaoProxima = document.getElementById("btnProximaPergunta");
            if (botaoProxima) {
                botaoProxima.textContent = perguntaAtualIndice + 1 < obterPerguntasPersonagem().length
                    ? "Próxima pergunta"
                    : "Ver resultado";
                botaoProxima.classList.remove("escondido");
                botaoProxima.onclick = () => {
                    perguntaAtualIndice++;
                    if (perguntaAtualIndice < obterPerguntasPersonagem().length) {
                        mostrarPergunta();
                    } else {
                        mostrarResultado(false);
                    }
                };
            }
        }
    }, 1000);
}

function atualizarCronometro() {
    const elemento = document.getElementById("cronometroQuiz");
    if (elemento) {
        elemento.textContent = `⏱️ ${tempoRestante}s`;
        elemento.classList.toggle("urgente", tempoRestante <= 5);
    }
}

function mostrarPergunta() {
    const perguntaEl = document.getElementById("perguntaQuiz");
    const alternativasEl = document.getElementById("alternativasQuiz");
    if (!perguntaEl || !alternativasEl) return;

    const botaoProxima = document.getElementById("btnProximaPergunta");
    if (botaoProxima) {
        botaoProxima.classList.add("escondido");
        botaoProxima.onclick = null;
    }

    const listaPerguntas = obterPerguntasPersonagem();
    const q = listaPerguntas[perguntaAtualIndice];
    const nivel = niveisBloom[Math.min(perguntaAtualIndice + 1, niveisBloom.length - 1)];
    const nivelEl = document.getElementById("nivelBloom");
    if (nivelEl) nivelEl.textContent = `${nivel.emoji} ${nivel.nome}`;
    perguntaEl.innerHTML = `<span class="badge-pergunta">Desafio ${perguntaAtualIndice + 1} de ${listaPerguntas.length}</span><br>${q.pergunta}`;
    alternativasEl.innerHTML = "";
    document.getElementById("feedbackQuiz").textContent = "";
    document.getElementById("dicaQuiz").classList.add("escondido");
    document.getElementById("barraPergunta").style.width = `${(perguntaAtualIndice / listaPerguntas.length) * 100}%`;

    q.alternativas.forEach((texto, index) => {
        const botao = document.createElement("button");
        botao.className = "alternativa";
        botao.type = "button";
        botao.textContent = `${String.fromCharCode(65 + index)}. ${texto}`;
        botao.onclick = () => verificarRespostaMultipla(index, q.correta, listaPerguntas.length, botao, alternativasEl);
        alternativasEl.appendChild(botao);
    });
    configurarDica(q);
    iniciarCronometro();
}

function configurarDica(pergunta) {
    const botao = document.getElementById("btnDica");
    const dica = document.getElementById("dicaQuiz");
    if (!botao || !dica) return;
    botao.onclick = () => {
        dica.textContent = `💡 Pista: ${pergunta.dica || `compare as alternativas com a função principal de ${personagemAtual.nome}.`}`;
        dica.classList.remove("escondido");
        botao.disabled = true;
    };
    botao.disabled = false;
}

function verificarRespostaMultipla(respostaEscolhida, respostaCorreta, totalPerguntas, botaoClicado, containerAlternativas) {
    clearInterval(intervaloQuiz);
    const botoes = containerAlternativas.querySelectorAll(".alternativa");
    botoes.forEach(b => b.disabled = true);
    const feedback = document.getElementById("feedbackQuiz");
    const pergunta = obterPerguntasPersonagem()[perguntaAtualIndice];
    if (respostaEscolhida === respostaCorreta) {
        botaoClicado.classList.add("correta");
        if (feedback) feedback.textContent = `✅ ${pergunta.feedback ? pergunta.feedback[respostaCorreta] : "Resposta correta."}`;
        if (typeof tocarSucesso === "function") tocarSucesso();
        acertosQuiz++;
    } else {
        if (respostaEscolhida >= 0) botaoClicado.classList.add("incorreta");
        if (botoes[respostaCorreta]) botoes[respostaCorreta].classList.add("correta");
        if (feedback) feedback.textContent = `🔁 ${pergunta.feedback ? pergunta.feedback[respostaEscolhida] || pergunta.feedback[respostaCorreta] : "Observe a alternativa destacada e use a explicação para revisar."}`;
        if (typeof tocarErro === "function") tocarErro();
    }
    mostrarFeedbackPergunta(pergunta, respostaEscolhida);
    const botaoProxima = document.getElementById("btnProximaPergunta");
    if (botaoProxima) {
        botaoProxima.textContent = perguntaAtualIndice + 1 < totalPerguntas
            ? "Próxima pergunta"
            : "Ver resultado";
        botaoProxima.classList.remove("escondido");
        botaoProxima.onclick = () => {
            perguntaAtualIndice++;
            if (perguntaAtualIndice < totalPerguntas) {
                mostrarPergunta();
            } else if (acertosQuiz === totalPerguntas) {
                finalizarMissao();
            } else {
                mostrarResultado(false);
            }
        };
    } else {
        perguntaAtualIndice++;
        if (perguntaAtualIndice < totalPerguntas) {
            mostrarPergunta();
        } else if (acertosQuiz === totalPerguntas) {
            finalizarMissao();
        } else {
            mostrarResultado(false);
        }
    }

}

function mostrarFeedbackPergunta(pergunta, respostaEscolhida) {
    const feedback = document.getElementById("feedbackQuiz");
    if (!feedback || !pergunta.feedback) return;
    feedback.textContent = respostaEscolhida >= 0
        ? `${respostaEscolhida === pergunta.correta ? "✅ " : "🔁 "}${pergunta.feedback[respostaEscolhida]}`
        : `⏱️ ${pergunta.feedback[pergunta.correta]}`;
}
