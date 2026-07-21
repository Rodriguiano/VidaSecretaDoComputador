
/* =====================================================
   DADOS DO JOGADOR
===================================================== */


let dadosJogo = {


    xp: 0,


    concluidos: []


};



/* =====================================================
   LOCAL STORAGE
===================================================== */


function carregarProgresso(){



    const salvo =

        localStorage.getItem(
            "vidaSecretaComputador"
        );



    if(salvo){


        dadosJogo = JSON.parse(salvo);


    }


}






function salvarProgresso(){



    localStorage.setItem(

        "vidaSecretaComputador",

        JSON.stringify(dadosJogo)

    );


}





carregarProgresso();



/* =====================================================
   SISTEMA DE DESBLOQUEIO
===================================================== */


function atualizarBloqueios(){



    const cards =

    document.querySelectorAll(
        ".card-personagem"
    );





    cards.forEach(card=>{



        const personagem =

        card.dataset.personagem;




        const status =

        card.querySelector(
            ".status"
        );





        // ==============================
        // CHEFE FINAL
        // ==============================


        if(personagem === "virus"){



            if(

            dadosJogo.concluidos.length

            ===

            configuracaoJogo.totalMissoes

            ){



                card.classList.remove(
                    "bloqueado"
                );



                if(status){


                    status.textContent =

                    "⚔ Enfrentar Vírus";


                }



                card.onclick = ()=>{


                    abrirPersonagem(
                        "virus"
                    );


                };



            }

            else{



                card.classList.add(
                    "bloqueado"
                );



                if(status){


                    status.textContent =

                    "🔒 Bloqueado";


                }



                card.onclick = () => {
                    if (typeof tocarErro === "function") tocarErro();
                };


            }





            return;


        }






        // ==============================
        // COMPONENTES NORMAIS
        // ==============================



        card.classList.remove(
            "bloqueado"
        );



        if(status){



            if(

            dadosJogo.concluidos.includes(
                personagem
            )

            ){



                status.textContent =

                "✔ Missão Concluída";



            }

            else{



                status.textContent =

                "🔓 Disponível";



            }



        }






        card.onclick = ()=>{


            abrirPersonagem(
                personagem
            );


        };



    });



}



/* =====================================================
   COMPLETAR MISSÃO
===================================================== */


function finalizarMissao(){



    const id =

    Object.keys(personagens)

    .find(

        chave =>

        personagens[chave]

        ===

        personagemAtual

    );





    // impede XP duplicado

    if(

    !dadosJogo.concluidos.includes(id)

    ){



        dadosJogo.concluidos.push(id);



        dadosJogo.xp +=

        configuracaoJogo.xpPorMissao;



        salvarProgresso();



    }






    mostrarResultado(true);



}









function mostrarResultado(acertou){



    const quiz =

    document.getElementById(
        "areaQuiz"
    );



    const resultado =

    document.getElementById(
        "areaResultado"
    );



    const titulo =

    document.getElementById(
        "tituloResultado"
    );



    const texto =

    document.getElementById(
        "textoResultado"
    );





    if(quiz){

        quiz.classList.add(
            "escondido"
        );

    }




    if(resultado){

        resultado.classList.remove(
            "escondido"
        );

    }





    if(acertou){

        if (typeof tocarSucesso === "function") tocarSucesso();

        titulo.textContent =

        "🎉 Parabéns!";



        texto.textContent =

        "Resposta correta! Você ganhou +100 XP e completou essa missão.";



    }

    else{

        if (typeof tocarErro === "function") tocarErro();

        titulo.textContent =

        "❌ Ops!";



        texto.textContent =

        "Resposta errada. Tente novamente e continue aprendendo!";



    }




}






