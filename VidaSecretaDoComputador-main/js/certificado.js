/* =====================================================
   CERTIFICADO
===================================================== */
document.addEventListener("DOMContentLoaded", () => {

    carregarCertificado();

});


function carregarCertificado() {

    corrigirXP();

    const xpFinal = document.getElementById("xpFinal");
    const nomeAluno = document.getElementById("nomeAluno");
    const nomeAlunoInput = document.getElementById("nomeAlunoInput");
    const dataCertificado = document.getElementById("dataCertificado");

    if (xpFinal) {
        xpFinal.textContent = `${dadosJogo.xp} XP`;
    }

    if (nomeAluno) {
        nomeAluno.textContent = dadosJogo.nomeAluno || "Estudante";
    }

    if (nomeAlunoInput) {
        nomeAlunoInput.value = dadosJogo.nomeAluno || "";
        nomeAlunoInput.addEventListener("input", () => {
            dadosJogo.nomeAluno = nomeAlunoInput.value.trim();
            salvarProgresso();
            nomeAluno.textContent = dadosJogo.nomeAluno || "Estudante";
        });
    }

    if (dataCertificado) {
        dataCertificado.textContent = new Intl.DateTimeFormat("pt-BR", {
            dateStyle: "long"
        }).format(new Date());
    }

    if (typeof tocarVitoria === "function") tocarVitoria();
}

const botaoReiniciar = document.getElementById("btnJogarNovamente");
const botaoMapaCertificado = document.getElementById("btnVoltarMapaCertificado");
const botaoPdf = document.getElementById("btnBaixarPdf");

if (botaoReiniciar) {

    botaoReiniciar.addEventListener("click", () => {

        if (typeof tocarClique === "function") tocarClique();

        localStorage.removeItem("vidaSecretaComputador");

        window.location.href = "../index.html";

    });

}

if (botaoMapaCertificado) {
    botaoMapaCertificado.addEventListener("click", () => {
        if (typeof tocarClique === "function") tocarClique();
        window.location.href = "mapa.html";
    });
}

if (botaoPdf) {
    botaoPdf.addEventListener("click", () => {
        if (typeof tocarClique === "function") tocarClique();
        imprimirCertificado();
    });
}

function imprimirCertificado() {
    const certificado = document.querySelector(".certificado");
    if (!certificado) return;

    const janela = window.open("", "_blank", "width=1100,height=800");
    if (!janela) {
        window.print();
        return;
    }

    const conteudo = certificado.cloneNode(true);
    conteudo.querySelectorAll("button, input, .trofeu").forEach(elemento => elemento.remove());

    janela.document.open();
    janela.document.write(`<!doctype html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Certificado - Vida Secreta do Computador</title>
            <style>
                @page { size: A4 landscape; margin: 12mm; }
                * { box-sizing: border-box; }
                body {
                    margin: 0;
                    padding: 18mm;
                    color: #172033;
                    font-family: Arial, sans-serif;
                    background: #fff;
                }
                .certificado {
                    width: 100%;
                    min-height: 170mm;
                    padding: 24mm;
                    text-align: center;
                    border: 6px double #d49b22;
                    background: #fff;
                }
                h1 { margin: 0 0 10px; color: #8a5a00; font-size: 42px; }
                h2 { margin: 0 0 20px; font-size: 25px; }
                .nome-certificado { margin: 18px 0 4px; color: #8a5a00; font-size: 30px; font-weight: bold; }
                .data-certificado { color: #4a5568; font-size: 14px; }
                .mensagem-certificado { margin: 24px auto; max-width: 700px; line-height: 1.7; font-size: 17px; }
                .competencias-certificado { margin: 22px auto; padding: 14px; border: 1px solid #d49b22; }
                .competencias-certificado strong { display: block; margin-bottom: 10px; color: #8a5a00; }
                .competencias-certificado div { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; }
                .competencias-certificado span { padding: 7px 10px; color: #172033; font-size: 13px; }
                .xp-final { margin: 20px auto; font-size: 18px; }
                .xp-final strong { display: block; margin-top: 4px; color: #8a5a00; font-size: 32px; }
                .selo { margin: 20px auto 0; padding: 14px; width: 220px; color: #fff; font-weight: bold; background: #d97706; }
            </style>
        </head>
        <body>${conteudo.outerHTML}</body>
        </html>`);
    janela.document.close();
    janela.focus();
    janela.onload = () => {
        janela.print();
        janela.onafterprint = () => janela.close();
    };
}

carregarCertificado();