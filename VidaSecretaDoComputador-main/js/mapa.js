

document.addEventListener("DOMContentLoaded", () => {

    atualizarMapa();
    verificarFinal();

});
/* =====================================================
   ABRIR PERSONAGEM
===================================================== */



function abrirPersonagem(nome){

    if (typeof tocarClique === "function") tocarClique();

    window.location.href =


    "personagem.html?personagem="

    +

    nome;



}
/* =====================================================
   HUD DO MAPA
===================================================== */


function atualizarMapa(){



    const xp =

    document.getElementById(
        "xpJogador"
    );



    const missoes =

    document.getElementById(
        "missoesConcluidas"
    );



    const barra =

    document.getElementById(
        "barraXP"
    );





    if(xp){


        xp.textContent =

        dadosJogo.xp;


    }





    if(missoes){


        missoes.textContent =

        dadosJogo.concluidos.length

        +

        "/"

        +

        configuracaoJogo.totalMissoes;


    }





    if(barra){


        let porcentagem =


        (

            dadosJogo.concluidos.length /

            configuracaoJogo.totalMissoes

        )

        * 100;




        barra.style.width =

        porcentagem + "%";


    }



    atualizarBloqueios();



}




