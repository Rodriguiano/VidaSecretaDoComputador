

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


function voltarMapa(){

    if (typeof tocarTransicao === "function") tocarTransicao();

    window.location.href =

    "mapa.html";


}

function voltarInicio(){

    if (typeof tocarTransicao === "function") tocarTransicao();

    window.location.href =

    "../index.html";


}






const botaoMapa =

document.getElementById(
    "btnVoltarMapa"
);



if(botaoMapa){


    botaoMapa.onclick = ()=>{


        voltarMapa();


    };


}






