
/* =====================================================
   DADOS DO JOGADOR
===================================================== */


let dadosJogo = {


    xp: 0,


    concluidos: [],
    tentativas: {},
    melhorPontuacao: 0,
    nomeAluno: ""


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


        const dadosSalvos = JSON.parse(salvo);
        dadosJogo = { ...dadosJogo, ...dadosSalvos };

        if (!Array.isArray(dadosJogo.concluidos)) dadosJogo.concluidos = [];
        if (typeof dadosJogo.nomeAluno !== "string") dadosJogo.nomeAluno = "";
    }

    corrigirXP();

}

function corrigirXP() {
    const missoesValidas = new Set(configuracaoJogo ? configuracaoJogo.personagensOrdem : []);
    const concluidosValidos = [...new Set(dadosJogo.concluidos)]
        .filter(id => missoesValidas.has(id));
    dadosJogo.concluidos = concluidosValidos;
    dadosJogo.xp = concluidosValidos.length * configuracaoJogo.xpPorMissao;
    salvarProgresso();
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



                card.classList.remove("bloqueado");



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

        const posicao = configuracaoJogo.personagensOrdem.indexOf(personagem);
        const anterior = posicao > 0 ? configuracaoJogo.personagensOrdem[posicao - 1] : null;
        const disponivel = posicao === 0 || dadosJogo.concluidos.includes(anterior);

        if (!disponivel) {
            card.classList.add("bloqueado");
            if (status) status.textContent = "🔒 Complete a missão anterior";
            card.onclick = () => {
                if (typeof tocarErro === "function") tocarErro();
            };
            return;
        }

        card.classList.remove("bloqueado");



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

    const resumo = document.getElementById("resumoAprendizagem");
    const tentarNovamente = document.getElementById("btnTentarNovamente");





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
        "Você mobilizou diferentes níveis de pensamento e concluiu a missão. +100 XP conquistados!";
        if (resumo) resumo.innerHTML = "<strong>Trilha concluída:</strong> você lembrou conceitos, compreendeu funções e aplicou o conhecimento em desafios.";
        if (tentarNovamente) tentarNovamente.classList.add("escondido");



    }

    else{

        if (typeof tocarErro === "function") tocarErro();

        titulo.textContent =

        "❌ Ops!";



        texto.textContent =
        "A missão ainda não foi concluída. Revise a curiosidade, consulte a dica e tente novamente.";
        if (resumo) resumo.innerHTML = "<strong>Estratégia de estudo:</strong> explique o conceito com suas palavras e relacione-o a uma situação real antes de responder.";
        if (tentarNovamente) tentarNovamente.classList.remove("escondido");

    }




}

const botaoTentarNovamente = document.getElementById("btnTentarNovamente");
if (botaoTentarNovamente) {
    botaoTentarNovamente.onclick = () => {
        if (typeof iniciarQuiz === "function") iniciarQuiz();
    };
}

