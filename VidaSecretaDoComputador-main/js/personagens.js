/* =====================================================
   BANCO DE PERSONAGENS
===================================================== */
document.addEventListener("DOMContentLoaded", () => {

    carregarPersonagem();

});

const personagens = {


    cpu: {

        nome: "CPU",

        imagem: "../img/personagens/cpu.png",


        dialogos: [

            "Olá! Eu sou a CPU.",

            "Sou conhecido como o cérebro do computador.",

            "Eu realizo cálculos e executo comandos.",

            "Sem mim, o computador não conseguiria funcionar!"

        ],


        curiosidade:

            "Consigo realizar bilhões de cálculos por segundo para executar tarefas.",



        pergunta:

            "Quem é responsável pelos cálculos do computador?",



        alternativas: [

            "CPU",

            "Monitor",

            "Teclado"

        ],


        correta: 0

    },





    ram: {


        nome: "RAM",

        imagem: "../img/personagens/ram.png",



        dialogos: [

            "Oi! Eu sou a memória RAM.",

            "Eu guardo informações temporariamente enquanto o computador está ligado.",

            "Eu ajudo o computador a executar vários programas ao mesmo tempo."

        ],



        curiosidade:

            "Quando você abre um aplicativo, muitos dados ficam temporariamente comigo.",



        pergunta:

            "O que acontece com os dados da RAM quando desligamos o computador?",



        alternativas: [

            "Eles são apagados",

            "Eles ficam para sempre",

            "Eles são enviados para a internet"

        ],


        correta: 0

    },








    ssd: {


        nome: "SSD",

        imagem: "../img/personagens/ssd.png",



        dialogos: [

            "Olá! Eu sou o SSD.",

            "Eu sou responsável por guardar arquivos e programas.",

            "Meus dados continuam salvos mesmo quando o computador desliga."

        ],



        curiosidade:

            "SSDs são muito rápidos e ajudam computadores a iniciarem em poucos segundos.",



        pergunta:

            "Qual é a função principal do SSD?",



        alternativas: [

            "Guardar arquivos",

            "Mostrar imagens",

            "Resfriar o computador"

        ],


        correta: 0

    },








    gpu: {


        nome: "GPU",

        imagem: "../img/personagens/gpu.png",



        dialogos: [

            "Ei! Eu sou a GPU.",

            "Eu cuido dos gráficos e imagens do computador.",

            "Jogos, vídeos e animações dependem muito de mim."

        ],



        curiosidade:

            "Placas de vídeo possuem milhares de pequenos núcleos para criar imagens rapidamente.",



        pergunta:

            "Qual componente é responsável pelos gráficos?",



        alternativas: [

            "GPU",

            "Mouse",

            "SSD"

        ],


        correta: 0

    },









    placamae: {


        nome: "Placa-mãe",

        imagem: "../img/personagens/placamae.png",



        dialogos: [

            "Olá! Eu sou a Placa-mãe.",

            "Eu conecto todos os componentes do computador.",

            "Sou como uma estrada onde as informações passam."

        ],



        curiosidade:

            "Sem a placa-mãe, os componentes não conseguiriam trabalhar juntos.",



        pergunta:

            "Qual peça conecta todos os componentes do computador?",



        alternativas: [

            "Placa-mãe",

            "Caixa de som",

            "Monitor"

        ],


        correta: 0

    },

        firewall: {


        nome: "Firewall",

        imagem: "../img/personagens/firewall.png",



        dialogos: [

            "Olá! Eu sou o Firewall.",

            "Minha missão é proteger o computador contra ameaças.",

            "Eu verifico conexões e bloqueio acessos perigosos."

        ],



        curiosidade:

            "O Firewall funciona como uma barreira de segurança entre o computador e a internet.",



        pergunta:

            "Qual é a principal função do Firewall?",



        alternativas: [

            "Proteger o computador",

            "Criar jogos",

            "Aumentar o brilho da tela"

        ],


        correta: 0

    },








    internet: {


        nome: "Internet",

        imagem: "../img/personagens/internet.png",



        dialogos: [

            "Olá! Eu sou a Internet.",

            "Eu conecto computadores do mundo inteiro.",

            "Graças a mim podemos acessar sites e conversar online."

        ],



        curiosidade:

            "A internet conecta bilhões de dispositivos espalhados pelo planeta.",



        pergunta:

            "Qual é a função da Internet?",



        alternativas: [

            "Conectar computadores",

            "Armazenar energia",

            "Resfriar componentes"

        ],


        correta: 0

    },









    arquivos: {


        nome: "Arquivos",

        imagem: "../img/personagens/arquivos.png",



        dialogos: [

            "Oi! Eu sou o Arquivo.",

            "Eu guardo informações como fotos, vídeos e documentos.",

            "Eu ajudo a organizar tudo dentro do computador."

        ],



        curiosidade:

            "Existem vários tipos de arquivos, como imagens, músicas, vídeos e textos.",



        pergunta:

            "Qual é a função dos arquivos?",



        alternativas: [

            "Guardar informações",

            "Acelerar o processador",

            "Proteger contra vírus"

        ],


        correta: 0

    },









    virus: {


        nome: "Vírus Misterioso",

        imagem: "../img/personagens/virus.png",



        dialogos: [

            "HAHAHA! Finalmente você chegou até mim.",

            "Eu sou o Vírus Misterioso.",

            "Você aprendeu sobre todos os componentes.",

            "Agora vamos ver se você realmente conhece o computador!"

        ],



        curiosidade:

            "Vírus de computador são programas maliciosos criados para causar problemas ou roubar informações.",



        perguntasChefe: [

    {
        pergunta:
        "Qual componente é conhecido como o cérebro do computador?",

        alternativas:[
            "CPU",
            "SSD",
            "Monitor"
        ],

        correta:0
    },


    {
        pergunta:
        "Qual memória perde seus dados quando desligamos o computador?",

        alternativas:[
            "RAM",
            "SSD",
            "Placa-mãe"
        ],

        correta:0
    },


    {
        pergunta:
        "Qual componente é responsável pelos gráficos?",

        alternativas:[
            "GPU",
            "Firewall",
            "Arquivo"
        ],

        correta:0
    },


    {
        pergunta:
        "Qual peça conecta todos os componentes?",

        alternativas:[
            "Placa-mãe",
            "Internet",
            "CPU"
        ],

        correta:0
    },


    {
        pergunta:
        "Qual sistema ajuda a proteger o computador contra ameaças?",

        alternativas:[
            "Firewall",
            "SSD",
            "RAM"
        ],

        correta:0
    }

],


        chefe: true

    }


};




