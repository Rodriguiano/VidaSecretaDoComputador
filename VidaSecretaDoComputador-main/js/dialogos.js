/* =====================================================
   SISTEMA DE DIÁLOGOS
===================================================== */


let personagemAtual = null;


let etapaDialogo = 0;







function carregarPersonagem(){



    const parametros =

    new URLSearchParams(

        window.location.search

    );



    const nome =

    parametros.get(
        "personagem"
    );



    if(!nome) return;





    personagemAtual =

    personagens[nome];



    etapaDialogo = 0;





    const imagem =

    document.getElementById(
        "imagemPersonagem"
    );



    const titulo =

    document.getElementById(
        "nomePersonagem"
    );



    if(imagem){


        imagem.src =

        personagemAtual.imagem;


    }





    if(titulo){


        titulo.textContent =

        personagemAtual.nome;


    }



    mostrarDialogo();



}









function mostrarDialogo(){

    if (typeof tocarDialogo === "function") tocarDialogo();

    const texto =
    document.getElementById("textoDialogo");

    if(texto){

        texto.textContent =
        personagemAtual.dialogos[etapaDialogo];

    }

    // Se estiver na última fala...
    if(etapaDialogo === personagemAtual.dialogos.length - 1){

        botaoDialogo.classList.add("escondido");
        botaoCuriosidade.classList.remove("escondido");

    }

}









const botaoDialogo =

document.getElementById(
    "btnContinuarDialogo"
);




if(botaoDialogo){



    botaoDialogo.onclick = ()=>{



        etapaDialogo++;




        if(

        etapaDialogo

        <

        personagemAtual.dialogos.length

        ){


            mostrarDialogo();



        }

        else{


            botaoDialogo.classList.add("escondido");

            botaoCuriosidade.classList.remove("escondido");



        }



    };



}

const botaoCuriosidade =

document.getElementById(
    "btnCuriosidade"
);




if(botaoCuriosidade){



    botaoCuriosidade.onclick = ()=>{


        mostrarCuriosidade();

        botaoCuriosidade.classList.add("escondido");


    };



}


/* =====================================================
   CURIOSIDADE
===================================================== */


function mostrarCuriosidade(){

    if (typeof tocarClique === "function") tocarClique();

    const area =

    document.getElementById(
        "areaCuriosidade"
    );



    const texto =

    document.getElementById(
        "textoCuriosidade"
    );



    if(area && texto){


        texto.textContent =

        personagemAtual.curiosidade;



        area.classList.remove(
            "escondido"
        );


    }



}








const botaoQuiz =

document.getElementById(
    "btnIniciarQuiz"
);




if(botaoQuiz){



    botaoQuiz.onclick = ()=>{


        iniciarQuiz();


    };



}


