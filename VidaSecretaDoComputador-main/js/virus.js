






/* =====================================================
   FINAL DO VÍRUS
===================================================== */


function verificarFinal(){



    const pagina =

    window.location.pathname;



    if(

    pagina.includes(
        "personagem.html"
    )

    &&

    personagemAtual

    &&

    personagemAtual.chefe

    ){



        if(

        dadosJogo.concluidos.length

        ===

        configuracaoJogo.totalMissoes

        ){



            // aqui futuramente pode entrar
            // batalha final com 5 perguntas



        }



    }



}





/* =====================================================
   BATALHA FINAL CONTRA O VÍRUS
===================================================== */


let perguntaChefeAtual = 0;

let acertosChefe = 0;




function iniciarBatalhaVirus(){

    if (typeof tocarVirus === "function") tocarVirus();

    perguntaChefeAtual = 0;

    acertosChefe = 0;


    mostrarPerguntaVirus();


}






function mostrarPerguntaVirus(){


    const chefe = personagens.virus;


    const perguntaAtual =

    chefe.perguntasChefe[
        perguntaChefeAtual
    ];



    document.getElementById(
        "perguntaQuiz"
    ).textContent =

    perguntaAtual.pergunta;



    const area =

    document.getElementById(
        "alternativasQuiz"
    );



    area.innerHTML = "";




    perguntaAtual.alternativas

    .forEach((alternativa,index)=>{


        const botao =

        document.createElement(
            "button"
        );



        botao.className =
        "alternativa";



        botao.textContent =
        alternativa;




        botao.onclick = ()=>{


            responderVirus(index);


        };



        area.appendChild(botao);



    });



}






function responderVirus(resposta){



    const perguntaAtual =

    personagens.virus.perguntasChefe[
        perguntaChefeAtual
    ];



    if(

    resposta === perguntaAtual.correta

    ){

        if (typeof tocarSucesso === "function") tocarSucesso();

        acertosChefe++;


    }

    else{

        if (typeof tocarErro === "function") tocarErro();

    }






    perguntaChefeAtual++;





    if(

    perguntaChefeAtual <

    personagens.virus.perguntasChefe.length

    ){


        mostrarPerguntaVirus();



    }

    else{


        finalizarBatalhaVirus();


    }



}






function finalizarBatalhaVirus(){



    if(

    acertosChefe === 5

    ){

        if (typeof tocarVitoria === "function") tocarVitoria();

        window.location.href =

        "certificado.html";



    }

    else{

        if (typeof tocarErro === "function") tocarErro();

        alert(

        "O vírus escapou! Revise os componentes e tente novamente."

        );


        voltarMapa();


    }




}
