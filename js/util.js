

/* =====================================================
   CONFIGURAÇÕES DO JOGO
===================================================== */


const configuracaoJogo = {


    xpPorMissao: 100,


    totalMissoes: 8,



    personagensOrdem: [


        "cpu",

        "ram",

        "ssd",

        "gpu",

        "placamae",

        "firewall",

        "internet",

        "arquivos"


    ]


};



/* =====================================================
   NAVEGAÇÃO
===================================================== */


function voltarMapa() {

    if (typeof tocarTransicao === "function") tocarTransicao();

    window.location.href =

        "mapa.html";


}

function voltarInicio() {

    if (typeof tocarTransicao === "function") tocarTransicao();

    window.location.href =

        "../index.html";


}






const botaoMapa =

    document.getElementById(
        "btnVoltarMapa"
    );



if (botaoMapa) {


    botaoMapa.onclick = () => {


        voltarMapa();


    };


}

const CRITERIOS_JOGO = {
    acertosMinimosMissao: 2,  // módulo concluído com pelo menos 2 acertos em 3
    acertosMinimosChefe: 4    // Vírus derrotado com pelo menos 4 acertos em 6
};

function embaralharAlternativas(alternativas, correta) {
    const itens = alternativas.map((texto, i) => ({ texto, certa: i === correta }));
    for (let i = itens.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [itens[i], itens[j]] = [itens[j], itens[i]];
    }
    return {
        alternativas: itens.map(x => x.texto),
        correta: itens.findIndex(x => x.certa)
    };
}




