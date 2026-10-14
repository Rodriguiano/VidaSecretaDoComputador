/* =====================================================
   BATALHA FINAL CONTRA O VÍRUS (DESAFIO EXPANDIDO)
   Vida Secreta do Computador
===================================================== */

let perguntaChefeAtual = 0;
let acertosChefe = 0;

function verificarFinal() {
    const pagina = window.location.pathname;

    if (pagina.includes("personagem.html") && typeof personagemAtual !== "undefined" && personagemAtual && personagemAtual.chefe) {
        if (dadosJogo.concluidos.length === configuracaoJogo.totalMissoes) {
            // Chefe liberado
        }
    }
}

function iniciarBatalhaVirus() {
    if (typeof tocarVirus === "function") tocarVirus();
    const curiosidade = document.getElementById("areaCuriosidade");
    const quiz = document.getElementById("areaQuiz");
    if (curiosidade) curiosidade.classList.add("escondido");
    if (quiz) quiz.classList.remove("escondido");
    perguntaChefeAtual = 0;
    acertosChefe = 0;
    mostrarPerguntaVirus();
}

function mostrarPerguntaVirus() {
    const chefe = personagens.virus;
    const listaPerguntas = chefe.perguntasChefe;
    const perguntaAtual = listaPerguntas[perguntaChefeAtual];

    const perguntaEl = document.getElementById("perguntaQuiz");
    const area = document.getElementById("alternativasQuiz");

    if (!perguntaEl || !area) return;

    const botaoProxima = document.getElementById("btnProximaPergunta");
    if (botaoProxima) {
        botaoProxima.classList.add("escondido");
        botaoProxima.onclick = null;
    }

    perguntaEl.innerHTML = `<span class="badge-pergunta badge-chefe">⚔️ Desafio Chefe ${perguntaChefeAtual + 1} de ${listaPerguntas.length}</span><br>${perguntaAtual.pergunta}`;

    area.innerHTML = "";

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement("button");
        botao.className = "alternativa alternativa-chefe";
        botao.textContent = alternativa;

        botao.onclick = () => {
            responderVirus(index, perguntaAtual.correta, listaPerguntas.length, botao, area);
        };

        area.appendChild(botao);
    });
}

function responderVirus(respostaEscolhida, respostaCorreta, totalPerguntas, botaoClicado, containerArea) {
    const botoes = containerArea.querySelectorAll(".alternativa");
    botoes.forEach(b => b.disabled = true);

    if (respostaEscolhida === respostaCorreta) {
        botaoClicado.classList.add("correta");
        const feedback = document.getElementById("feedbackQuiz");
        if (feedback) feedback.textContent = `✅ ${personagens.virus.perguntasChefe[perguntaChefeAtual].feedback[respostaCorreta]}`;
        if (typeof tocarSucesso === "function") tocarSucesso();
        acertosChefe++;
    } else {
        botaoClicado.classList.add("incorreta");
        if (botoes[respostaCorreta]) {
            botoes[respostaCorreta].classList.add("correta");
        }
        const feedback = document.getElementById("feedbackQuiz");
        if (feedback) feedback.textContent = `🔁 ${personagens.virus.perguntasChefe[perguntaChefeAtual].feedback[respostaEscolhida]}`;
        if (typeof tocarErro === "function") tocarErro();
    }

    const botaoProxima = document.getElementById("btnProximaPergunta");
    if (botaoProxima) {
        botaoProxima.textContent = perguntaChefeAtual + 1 < totalPerguntas
            ? "Próxima pergunta"
            : "Ver resultado";
        botaoProxima.classList.remove("escondido");
        botaoProxima.onclick = () => {
            perguntaChefeAtual++;
            if (perguntaChefeAtual < totalPerguntas) {
                mostrarPerguntaVirus();
            } else {
                finalizarBatalhaVirus();
            }
        };
    } else {
        perguntaChefeAtual++;

        if (perguntaChefeAtual < totalPerguntas) {
            mostrarPerguntaVirus();
        } else {
            finalizarBatalhaVirus();
        }
    }
}

function finalizarBatalhaVirus() {
    const totalPerguntas = personagens.virus.perguntasChefe.length;

    if (acertosChefe === totalPerguntas) {
        if (typeof tocarVitoria === "function") tocarVitoria();
        window.location.href = "certificado.html";
    } else {
        if (typeof tocarErro === "function") tocarErro();
        alert(`O Vírus Misterioso resistiu! Você acertou ${acertosChefe} de ${totalPerguntas} perguntas. Revise os componentes no mapa e tente novamente!`);
        voltarMapa();
    }
}
