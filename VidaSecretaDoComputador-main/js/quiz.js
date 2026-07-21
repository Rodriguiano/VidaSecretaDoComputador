/* =====================================================
   MOTOR DE QUIZ MULTI-DESAFIOS
   Vida Secreta do Computador
===================================================== */

let perguntaAtualIndice = 0;
let acertosQuiz = 0;

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

function mostrarPergunta() {
    const perguntaEl = document.getElementById("perguntaQuiz");
    const alternativasEl = document.getElementById("alternativasQuiz");

    if (!perguntaEl || !alternativasEl) return;

    const listaPerguntas = obterPerguntasPersonagem();
    const q = listaPerguntas[perguntaAtualIndice];

    perguntaEl.innerHTML = `<span class="badge-pergunta">Desafio ${perguntaAtualIndice + 1} de ${listaPerguntas.length}</span><br>${q.pergunta}`;

    alternativasEl.innerHTML = "";

    q.alternativas.forEach((texto, index) => {
        const botao = document.createElement("button");
        botao.className = "alternativa";
        botao.textContent = texto;

        botao.onclick = () => {
            verificarRespostaMultipla(index, q.correta, listaPerguntas.length, botao, alternativasEl);
        };

        alternativasEl.appendChild(botao);
    });
}

function verificarRespostaMultipla(respostaEscolhida, respostaCorreta, totalPerguntas, botaoClicado, containerAlternativas) {
    const botoes = containerAlternativas.querySelectorAll(".alternativa");
    botoes.forEach(b => b.disabled = true);

    if (respostaEscolhida === respostaCorreta) {
        botaoClicado.classList.add("correta");
        if (typeof tocarSucesso === "function") tocarSucesso();
        acertosQuiz++;
    } else {
        botaoClicado.classList.add("incorreta");
        if (botoes[respostaCorreta]) {
            botoes[respostaCorreta].classList.add("correta");
        }
        if (typeof tocarErro === "function") tocarErro();
    }

    setTimeout(() => {
        perguntaAtualIndice++;

        if (perguntaAtualIndice < totalPerguntas) {
            mostrarPergunta();
        } else {
            if (acertosQuiz === totalPerguntas) {
                finalizarMissao();
            } else {
                mostrarResultado(false);
            }
        }
    }, 900);
}
