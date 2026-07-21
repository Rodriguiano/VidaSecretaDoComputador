
/* =====================================================
   QUIZ
===================================================== */


function iniciarQuiz(){



    const curiosidade =

    document.getElementById(
        "areaCuriosidade"
    );



    const quiz =

    document.getElementById(
        "areaQuiz"
    );



    if(curiosidade){


        curiosidade.classList.add(
            "escondido"
        );


    }



    if(quiz){


        quiz.classList.remove(
            "escondido"
        );


    }



    mostrarPergunta();



}









function mostrarPergunta(){



    const pergunta =

    document.getElementById(
        "perguntaQuiz"
    );



    const alternativas =

    document.getElementById(
        "alternativasQuiz"
    );




    if(!pergunta || !alternativas)

        return;




    pergunta.textContent =

    personagemAtual.pergunta;




    alternativas.innerHTML = "";





    personagemAtual.alternativas

    .forEach((texto,index)=>{



        const botao =

        document.createElement(
            "button"
        );



        botao.className =

        "alternativa";



        botao.textContent =

        texto;




        botao.onclick = ()=>{


            verificarResposta(
                index
            );


        };



        alternativas.appendChild(
            botao
        );



    });



}









function verificarResposta(resposta){



    if(

    resposta ===

    personagemAtual.correta

    ){



        finalizarMissao();



    }

    else{



        mostrarResultado(false);



    }



}


