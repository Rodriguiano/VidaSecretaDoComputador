/* =====================================================
   CERTIFICADO
===================================================== */
document.addEventListener("DOMContentLoaded", () => {

    carregarCertificado();

});


function carregarCertificado() {

    if (typeof tocarVitoria === "function") tocarVitoria();

    const xpFinal = document.getElementById("xpFinal");

    if (xpFinal) {
        xpFinal.textContent = dadosJogo.xp;
    }

}

const botaoReiniciar = document.getElementById("btnJogarNovamente");

if (botaoReiniciar) {

    botaoReiniciar.addEventListener("click", () => {

        if (typeof tocarClique === "function") tocarClique();

        localStorage.removeItem("vidaSecretaComputador");

        window.location.href = "../index.html";

    });

}


carregarCertificado();