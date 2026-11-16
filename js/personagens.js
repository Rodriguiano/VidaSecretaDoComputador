/* =====================================================
   BANCO DE PERSONAGENS E DESAFIOS
   Conteúdo baseado no roteiro instrucional do projeto.
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    carregarPersonagem();
});

function desafio(pergunta, alternativas, correta, feedback, dica) {
    return { pergunta, alternativas, correta, feedback, dica };
}

const personagens = {
    cpu: {
        nome: "CPU (Processador)",
        imagem: "../img/personagens/cpu.png",
        dialogos: [
            "Olá, Agente Digital! Eu sou a CPU, a Unidade Central de Processamento.",
            "Sou o cérebro do computador: tudo o que voc? pede passa por mim.",
            "Pense em um maestro: eu leio a partitura (as instruções) e digo a cada parte do computador quando agir.",
            "Executo instruções uma após a outra, muito depressa. Minha velocidade e medida em GHz: 3 GHz são 3 bilhões de ciclos por segundo.",
            "Mas velocidade não e tudo: meus núcleos permitem fazer várias tarefas ao mesmo tempo. E eu esquento, por isso preciso de cooler e pasta térmica.",
            "Agora que voc? me conhece melhor, está preparado para testar seus conhecimentos?"
        ],
        curiosidade: "O que sou: o processador; busco, interpreto e executo as instruções dos programas.\r\n\r\n\r\n\r\nComo trabalho: repito o ciclo buscar → interpretar → executar bilhões de vezes por segundo, usando um ou mais núcleos.\r\n\r\n\r\n\r\nExemplo no cotidiano: ao abrir uma planilha, calculo as fórmulas e coordeno a resposta do sistema.\r\n\r\n\r\n\r\nNao confunda: GHz sozinho não define o desempenho; núcleos e arquitetura tamb?m importam. CPU não e o gabinete.",
        perguntas: [
            desafio("Um colega disse: \"a CPU e onde ficam guardados meus programas e fotos\". Qual explica??o corrige melhor essa frase?", [
                "Esta certo, a CPU e o componente mais importante.",
                "A CPU não guarda arquivos: ela executa as instruções dos programas.",
                "A CPU só serve para ligar o computador."
            ], 1, [
                "Ser importante não significa guardar dados; guardar e função do armazenamento.",
                "Exato! Quem guarda e o SSD; a CPU processa.",
                "Ela trabalha o tempo todo, executando instruções."
            ], "Pense em quem pensa e quem guarda."),
            desafio("Ana compara duas CPUs: X (4,0 GHz, 2 núcleos) e Y (3,2 GHz, 8 núcleos). Para editar video com v?rios programas abertos, qual tende a ser melhor?", [
                "X, pois mais GHz sempre vence.",
                "Y, pois mais núcleos executam mais tarefas ao mesmo tempo.",
                "Tanto faz, GHz não importa."
            ], 1, [
                "GHz e importante, mas não e o ?nico fator.",
                "Para tarefas pesadas e simultâneas, mais núcleos costumam compensar.",
                "Importa, só que não sozinho."
            ], "Quantas tarefas cada uma consegue fazer ao mesmo tempo?"),
            desafio("Durante um jogo pesado, o PC desliga sozinho. O cooler da CPU está entupido de poeira. Qual a causa mais provavel?", [
                "A CPU superaqueceu e desligou o computador para se proteger.",
                "A CPU esqueceu os programas.",
                "O SSD está sem espaço."
            ], 0, [
                "Sem dissipar calor, a CPU ultrapassa a temperatura segura e o sistema desliga.",
                "A CPU não guarda programas; o sintoma aponta para a refrigeração.",
                "SSD cheio deixa o PC lento, mas não o desliga por calor."
            ], "Poeira no cooler atrapalha o que?")
        ]
    },

    ram: {
        nome: "RAM",
        imagem: "../img/personagens/ram.png",
        dialogos: [
            "Oi, Agente! Eu sou a RAM, a memória de acesso aleatorio.",
            "Sou a memória de trabalho: guardo o que voc? está usando agora para a CPU pegar rapidinho.",
            "Sou como a bancada de uma cozinha: só cabe o que está sendo preparado agora. O resto fica no armário (o SSD).",
            "Sou volátil: quando o computador desliga, tudo o que está em mim e apagado. Por isso e importante salvar seu trabalho!",
            "Minha capacidade e medida em GB. Com pouca RAM, o computador fica lento, porque não cabe tudo na bancada.",
            "Pronto para o desafio?"
        ],
        curiosidade: "O que sou: memória temporária e muito rápida, onde ficam os programas e dados em uso.\r\n\r\n\r\n\r\nComo trabalho: recebo do armazenamento o que a CPU vai precisar; quando voc? fecha um programa, o espaço e liberado.\r\n\r\n\r\n\r\nExemplo no cotidiano: cada aba aberta do navegador ocupa RAM; muitas abas podem deixar tudo lento.\r\n\r\n\r\n\r\nNao confunda: mais RAM não aumenta o espaço para guardar fotos; isso depende do armazenamento.",
        perguntas: [
            desafio("Qual explica??o descreve melhor a diferença entre RAM e SSD?", [
                "A RAM e permanente e o SSD e temporário.",
                "A RAM guarda temporariamente o que está em uso; o SSD guarda de forma permanente.",
                "São a mesma coisa com nomes diferentes."
            ], 1, [
                "E o contrario.",
                "Isso mesmo! Por isso a RAM e rápida e o SSD guarda tudo mesmo desligado.",
                "Tem funções e comportamentos diferentes."
            ], "O que acontece com cada um quando o PC e desligado?"),
            desafio("Você escrevia um trabalho e a energia acabou antes de salvar. O que acontece com o texto que só estava na tela?", [
                "Foi perdido, pois estava apenas na RAM.",
                "Foi automaticamente para o SSD.",
                "A CPU o guardou."
            ], 0, [
                "Dados não salvos ficam na RAM, que e volátil. Alguns programas tem salvamento automatico, que cria cópias no SSD.",
                "So vai para o SSD quando e salvo.",
                "A CPU processa, não guarda dados."
            ], "Onde fica o que ainda não foi salvo?"),
            desafio("O PC de Bruno fica lento com 30 abas e 3 programas abertos, embora o SSD tenha 500 GB livres. Qual a causa mais provavel?", [
                "Falta de espaço no SSD.",
                "A RAM está cheia: os programas abertos ocupam mais memória de trabalho do que cabe.",
                "A internet está desligada."
            ], 1, [
                "O SSD tem muito espaço livre.",
                "A lentidão aparece quando a RAM se esgota.",
                "Isso não explica lentidão geral do sistema."
            ], "O problema surge ao abrir muita coisa ao mesmo tempo.")
        ]
    },

    ssd: {
        nome: "SSD",
        imagem: "../img/personagens/ssd.png",
        dialogos: [
            "Olá, Agente! Eu sou o SSD (Solid State Drive).",
            "Guardo seus arquivos, programas e o sistema operacional, mesmo com o computador desligado.",
            "Sou o armário da cozinha: tudo fica guardado ali at? alguem precisar.",
            "Uso memória flash, sem pecas que giram, por isso sou mais rápido e silencioso que o antigo HD.",
            "Minha capacidade se mede em GB ou TB. Quando encho, não cabem arquivos novos.",
            "Vamos ao desafio?"
        ],
        curiosidade: "O que sou: armazenamento permanente de estado sólido.\r\n\r\n\r\n\r\nComo trabalho: gravo e leio dados em chips de memória flash; o computador copia para a RAM o que vai usar.\r\n\r\n\r\n\r\nExemplo no cotidiano: um jogo instalado ocupa espaço no SSD; ao abri-lo, parte dele e carregada na RAM.\r\n\r\n\r\n\r\nNao confunda: SSD guarda; RAM trabalha. O HD antigo tem disco giratório, o SSD não.",
        perguntas: [
            desafio("Por que um PC com SSD costuma abrir programas mais rápido que um com HD tradicional?", [
                "O SSD usa memória flash, sem partes mec?nicas que precisam girar.",
                "O SSD e maior fisicamente.",
                "O SSD faz calculos mais rápido que a CPU."
            ], 0, [
                "Sem pecas moveis, o acesso aos dados e bem mais rápido.",
                "O tamanho f?sico não explica a velocidade.",
                "O SSD só armazena; quem calcula e a CPU."
            ], "Pense no que o HD precisa fazer fisicamente para ler dados."),
            desafio("Lia quer guardar 200 fotos e instalar 3 jogos grandes, mas o PC avisa que o armazenamento está cheio. Qual a melhor solucao?", [
                "Comprar mais RAM.",
                "Apagar o que não usa ou aumentar o armazenamento.",
                "Trocar o cooler."
            ], 1, [
                "RAM não aumenta o espaço de armazenamento.",
                "A solucao e liberar espaço ou instalar um SSD maior.",
                "O cooler cuida da temperatura."
            ], "O aviso fala de armazenamento."),
            desafio("Ap?s reiniciar o PC, os arquivos salvos continuam la, mas os programas que estavam abertos fecharam. O que explica isso?", [
                "Os arquivos estavam no SSD (permanente); o que estava em execucao ficava na RAM (temporária).",
                "Tudo estava na RAM e só alguns dados sobreviveram.",
                "Os arquivos estavam dentro da CPU."
            ], 0, [
                "Reiniciar limpa a RAM, mas o SSD preserva os dados.",
                "Se estivessem só na RAM, os arquivos teriam sumido tamb?m.",
                "A CPU não armazena arquivos."
            ], "Um guarda para sempre, o outro só enquanto está ligado.")
        ]
    },

    gpu: {
        nome: "GPU",
        imagem: "../img/personagens/gpu.png",
        dialogos: [
            "Olá, Agente! Eu sou a GPU, a Unidade de Processamento Gr?fico.",
            "Crio as imagens, vídeos e animacoes que aparecem na sua tela.",
            "A CPU faz poucas tarefas complexas. Eu faco milhares de contas simples ao mesmo tempo, como uma grande equipe de pintores.",
            "Isso e perfeito para calcular a cor de milhões de pixels a cada segundo em jogos, vídeos e edição.",
            "Posso vir integrada ao processador ou numa placa de video dedicada, com memória pr?pria (VRAM).",
            "Pronto para o desafio?"
        ],
        curiosidade: "O que sou: processador especializado em gráficos.\r\n\r\n\r\n\r\nComo trabalho: calculo cor e posição de milhões de pixels em paralelo e envio o resultado ao monitor.\r\n\r\n\r\n\r\nExemplo no cotidiano: jogos 3D, vídeos em alta resolução e edição de imagem.\r\n\r\n\r\n\r\nNao confunda: GPU não e o monitor e não e a CPU. PCs simples usam GPU integrada.",
        perguntas: [
            desafio("Por que a GPU e boa para desenhar imagens na tela?", [
                "Executa uma só conta por vez, mas muito rápido.",
                "Faz muitas contas simples ao mesmo tempo, como calcular cada pixel.",
                "Guarda as imagens permanentemente."
            ], 1, [
                "Isso descreve melhor um nucleo de CPU.",
                "Esse processamento paralelo combina com gráficos.",
                "Armazenar e função do SSD."
            ], "Uma tela tem milhões de pixels para calcular juntos."),
            desafio("Rui quer jogar jogos 3D modernos e editar vídeos 4K. Qual melhoria no PC tera mais impacto direto?", [
                "Uma placa de video dedicada.",
                "Um teclado melhor.",
                "Mais portas USB."
            ], 0, [
                "Graficos pesados dependem muito da GPU.",
                "Isso não afeta o desempenho gráfico.",
                "Isso não afeta o processamento de imagens."
            ], "Qual componente cuida de gráficos?"),
            desafio("O monitor de Dani mostra a ?rea de trabalho normalmente, mas em jogos trava e roda com poucos quadros por segundo. Qual hipotese e mais coerente?", [
                "O monitor está sem energia.",
                "A GPU (integrada) não da conta da carga grafica dos jogos.",
                "O SSD está sem arquivos."
            ], 1, [
                "Se estivesse, nada apareceria.",
                "Tarefas simples funcionam; as pesadas exigem mais da GPU.",
                "Isso não causa queda de quadros."
            ], "O problema só aparece em tarefa pesada.")
        ]
    },

    placamae: {
        nome: "Placa-m?e",
        imagem: "../img/personagens/placamae.png",
        dialogos: [
            "Olá, Agente! Eu sou a Placa-m?e.",
            "Sou a grande placa onde todos os componentes são encaixados e conectados.",
            "Pense em mim como uma cidade com ruas: levo energia e informação de um lugar a outro.",
            "Tenho o soquete da CPU, os slots da RAM, os conectores do SSD e o espaço da placa de video.",
            "Os caminhos por onde os dados circulam se chamam barramentos. E nem tudo encaixa em mim: ? preciso haver compatibilidade.",
            "Vamos ao desafio?"
        ],
        curiosidade: "O que sou: a placa de circuito principal que interliga todos os componentes.\r\n\r\n\r\n\r\nComo trabalho: meus barramentos transportam dados e energia; o firmware (BIOS/UEFI) inicia o hardware ao ligar.\r\n\r\n\r\n\r\nExemplo no cotidiano: ao trocar a RAM, voc? encaixa o novo pente no slot da placa.\r\n\r\n\r\n\r\nNao confunda: nem toda CPU ou RAM serve em toda placa; ? preciso checar o soquete e o tipo de memória.",
        perguntas: [
            desafio("Qual frase explica melhor o papel da placa-m?e?", [
                "Executa os programas no lugar da CPU.",
                "Interliga os componentes e permite que eles se comuniquem.",
                "Guarda os arquivos do usuário."
            ], 1, [
                "Quem executa e a CPU.",
                "E a base que conecta tudo.",
                "Isso e função do SSD."
            ], "Pense em conexão."),
            desafio("Você comprou uma CPU nova, mas ela não encaixa na placa-m?e do seu PC. O que deveria ter verificado antes?", [
                "Se o soquete da placa e compativel com a CPU.",
                "Se a CPU combina com a cor do gabinete.",
                "Quantos GB tem o monitor."
            ], 0, [
                "Cada placa só aceita certos tipos de CPU.",
                "Cor não influencia.",
                "Monitor não tem relacao com o encaixe."
            ], "Onde a CPU se encaixa na placa?"),
            desafio("Uma RAM funciona no PC de um amigo, mas não no seu, mesmo sendo uma memória nova. Qual a explica??o mais provavel?", [
                "A RAM só funciona uma vez.",
                "As placas-mãe usam tipos de memória diferentes (por exemplo, DDR4 e DDR5).",
                "O SSD bloqueia a RAM."
            ], 1, [
                "Não existe essa limitacao.",
                "Mem?ria e placa precisam ser compativeis.",
                "O SSD não interfere nisso."
            ], "O que precisa combinar entre a placa e a memória?")
        ]
    },

    firewall: {
        nome: "Firewall",
        imagem: "../img/personagens/firewall.png",
        dialogos: [
            "Olá, Agente! Eu sou o Firewall, o guardiao do sistema.",
            "Fico entre o seu computador e a rede, vigiando tudo que entra e sai.",
            "Sou como o porteiro de um predio: confiro quem quer entrar e barro quem não deveria.",
            "Sigo regras: permito conexões seguras e bloqueio as suspeitas.",
            "Mas não sou magico: não impeco voc? de abrir um arquivo perigoso. Use antivírus, atualize o sistema e desconfie de links!",
            "Pronto para o desafio?"
        ],
        curiosidade: "O que sou: uma barreira de segurança que filtra o tráfego de rede.\r\n\r\n\r\n\r\nComo trabalho: analiso as conexões e aplico regras para permitir ou bloquear.\r\n\r\n\r\n\r\nExemplo no cotidiano: quando o sistema pergunta se um programa pode acessar a rede, o firewall está agindo.\r\n\r\n\r\n\r\nNao confunda: firewall não e antivírus; um filtra conexões, o outro procura e remove ameaças nos arquivos.",
        perguntas: [
            desafio("Qual explica??o descreve melhor o que o firewall faz?", [
                "Filtra o tráfego de rede segundo regras, permitindo ou bloqueando conexões.",
                "Remove arquivos infectados do computador.",
                "Aumenta a velocidade da internet."
            ], 0, [
                "E o porteiro da rede.",
                "Isso e função do antivírus.",
                "Seguran?a não e velocidade."
            ], "Lembre da analogia do porteiro."),
            desafio("Um site desconhecido tenta conectar ao seu PC sem voc? ter pedido, e o firewall mostra um alerta. O que fazer?", [
                "Permitir sempre, para evitar problemas.",
                "Bloquear, já que voc? não solicitou essa conexão.",
                "Desligar o firewall."
            ], 1, [
                "Liberar conexões desconhecidas abre brechas.",
                "Na duvida, bloqueie.",
                "Isso deixaria o PC desprotegido."
            ], "Você pediu essa conexão?"),
            desafio("Marcos manteve o firewall ligado, mas o PC foi infectado após ele abrir um anexo de e-mail desconhecido. Por que o firewall não evitou?", [
                "Porque o firewall não serve para nada.",
                "O firewall filtra tráfego de rede, mas foi o usuário quem executou o arquivo; a prote??o tamb?m depende de antivírus e atencao.",
                "O virus entrou pelo monitor."
            ], 1, [
                "Ele protege, mas contra outro tipo de risco.",
                "Seguran?a tem várias camadas, incluindo o usuário.",
                "Isso não existe."
            ], "Quem abriu o arquivo?")
        ]
    },

    internet: {
        nome: "Internet",
        imagem: "../img/personagens/internet.png",
        dialogos: [
            "Olá, Agente! Eu sou a Internet.",
            "Sou uma rede gigante que conecta bilhões de computadores e dispositivos do mundo.",
            "Imagine os Correios: sua mensagem e dividida em pacotes, que viajam por várias rotas e se juntam no destino.",
            "Cada dispositivo tem um endereco, o IP. E o DNS traduz nomes como site.com em endereços IP.",
            "Roteadores e cabos levam os pacotes. O Wi-Fi e só a forma sem fio de chegar at? o roteador.",
            "Vamos ao desafio?"
        ],
        curiosidade: "O que sou: a rede mundial que interliga redes menores.\r\n\r\n\r\n\r\nComo trabalho: divido os dados em pacotes e os encaminho usando endereços IP; o DNS traduz nomes em IPs.\r\n\r\n\r\n\r\nExemplo no cotidiano: ao abrir um video, seu pedido vai a um servidor e os pacotes voltam ao seu aparelho.\r\n\r\n\r\n\r\nNao confunda: Internet não e Wi-Fi, e não e o navegador. A Web e um serviço que funciona sobre a internet.",
        perguntas: [
            desafio("Qual explica??o descreve melhor o papel do DNS?", [
                "Traduz nomes de sites em endereços IP.",
                "Protege contra virus.",
                "Guarda as páginas no SSD."
            ], 0, [
                "E como uma lista telefonica da internet.",
                "Isso e função de antivírus e firewall.",
                "O DNS não armazena páginas."
            ], "Nomes são faceis para pessoas; numeros para m?quinas."),
            desafio("O Wi-Fi da casa mostra sinal completo, mas nenhum site abre, nem no celular. Qual a primeira acao mais logica?", [
                "Reiniciar o roteador/modem e verificar o serviço do provedor.",
                "Trocar a placa de video.",
                "Formatar o SSD."
            ], 0, [
                "O problema está na conexão com a internet, não no computador.",
                "Não tem relacao com acesso a rede.",
                "Seria exagero e não resolveria."
            ], "Se o celular tamb?m falha, o problema e do computador?"),
            desafio("Maria acessa um site digitando o endereco numerico (IP) e funciona, mas pelo nome ele não abre. O que isso indica?", [
                "Problema no DNS, que traduz nomes em IPs.",
                "O computador está sem energia.",
                "A RAM está cheia."
            ], 0, [
                "A conexão funciona; falha só a traducao do nome.",
                "Se estivesse, nada abriria.",
                "Não explicaria falhar só pelo nome."
            ], "O que muda entre digitar o IP e digitar o nome?")
        ]
    },

    arquivos: {
        nome: "Arquivos",
        imagem: "../img/personagens/arquivos.png",
        dialogos: [
            "Olá, Agente! Eu sou o Arquivo. Não sou uma peca f?sica: represento o mundo do software e dos dados.",
            "Todo texto, foto, musica ou programa e guardado como um arquivo, com nome e extensão.",
            "Imagine uma biblioteca: os arquivos são os livros e as pastas são as estantes que os organizam.",
            "A extensão (.docx, .jpg, .mp3) indica o tipo, e o sistema sabe qual programa abre cada um.",
            "Quem organiza onde tudo fica no SSD e o sistema de arquivos. E faca backup: cópias em outro lugar evitam perder tudo!",
            "Pronto para o desafio?"
        ],
        curiosidade: "O que sou: a unidade com que o computador guarda informação, com nome, tipo e tamanho.\r\n\r\n\r\n\r\nComo trabalho: o sistema de arquivos organiza tudo em pastas e registra onde cada arquivo está no SSD.\r\n\r\n\r\n\r\nExemplo no cotidiano: foto.jpg dentro da pasta Imagens.\r\n\r\n\r\n\r\nNao confunda: arquivo e dado (software); SSD e o hardware que o guarda.",
        perguntas: [
            desafio("O que a extensão de um arquivo (como .jpg ou .docx) informa?", [
                "O tipo do arquivo, ajudando o sistema a escolher o programa para abri-lo.",
                "A velocidade da CPU.",
                "O tamanho da RAM."
            ], 0, [
                "A extensão identifica o formato.",
                "Não tem relacao.",
                "Não tem relacao."
            ], "Ela vem depois do ponto no nome."),
            desafio("Pedro tem 300 fotos, trabalhos e musicas misturados na ?rea de trabalho e não encontra nada. Qual a melhor acao?", [
                "Criar pastas por categoria e mover os arquivos.",
                "Comprar mais RAM.",
                "Renomear todos como arquivo."
            ], 0, [
                "Pastas organizam e facilitam a busca.",
                "Não resolve desorganizacao.",
                "Nomes iguais pioram a confusao."
            ], "Lembre da biblioteca."),
            desafio("O notebook de Carla queimou e ela perdeu todos os trabalhos, que só existiam nele. O que teria evitado a perda?", [
                "Ter cópias de segurança (backup) em outro local, como nuvem ou HD externo.",
                "Dar outro nome as pastas.",
                "Ter mais GHz na CPU."
            ], 0, [
                "Uma copia separada sobrevive a falhas do equipamento.",
                "Não protege contra falha de hardware.",
                "Velocidade não protege dados."
            ], "Onde estava a ?nica copia?")
        ]
    },

    virus: {
        nome: "Vírus Misterioso",
        imagem: "../img/personagens/virus.png",
        dialogos: [
            "Hahaha! Então voc? e o Agente Digital que se acha capaz de me deter?",
            "Eu me espalho por links falsos, anexos e programas piratas, e invado quem se descuida.",
            "J? derrubei v?rios sistemas. Mas se voc? prestou atencao nos habitantes, sabe como me enfrentar.",
            "Vou testar tudo o que voc? aprendeu. Cada resposta certa me enfraquece!",
            "Para me derrotar e salvar o computador de vez, voc? tera que acertar pelo menos 4 das minhas 6 situações de teste final!"
        ],
        perguntasChefe: [
            {
                pergunta: "Léo escrevia um trabalho no editor de texto e ainda não tinha salvado quando a energia acabou. Quando o computador voltou, o texto sumiu, mas os jogos instalados e as fotos continuavam lá. O que explica isso?",
                alternativas: [
                    "O texto estava apenas na memória RAM, que é volátil; os jogos e as fotos estavam no SSD, que guarda dados mesmo sem energia.",
                    "O SSD apaga os arquivos mais recentes sempre que falta energia.",
                    "A CPU guarda os documentos e os esquece quando é desligada.",
                    "O texto estava no SSD, mas a RAM apaga os arquivos antigos para abrir espaço."
                ],
                correta: 0
            },
            {
                pergunta: "Ana joga um jogo 3D que roda com travadas, mas o navegador e as planilhas funcionam muito bem no mesmo computador. Ela quer melhorar apenas a parte gráfica. Qual é a melhor solução?",
                alternativas: [
                    "Instalar uma GPU (placa de vídeo) mais potente em um slot de expansão (PCIe) da placa-mãe.",
                    "Colocar mais RAM, porque é a memória que desenha os pixels na tela.",
                    "Trocar por um processador com mais GHz, porque só a CPU calcula gráficos.",
                    "Instalar um SSD maior, porque os quadros do jogo são guardados nele antes de aparecer."
                ],
                correta: 0
            },
            {
                pergunta: "O computador de Pedro desliga sozinho quando ele joga por muito tempo. Ao abrir o gabinete, ele vê que o cooler está coberto de poeira e quase não gira. Qual é a causa mais provável e o que fazer?",
                alternativas: [
                    "A CPU está superaquecendo porque o cooler não dissipa o calor; é preciso limpar o cooler e verificar a pasta térmica.",
                    "A RAM é volátil e por isso desliga o computador depois de algum tempo; é preciso trocá-la.",
                    "O firewall desliga o computador quando percebe uso intenso da CPU.",
                    "A BIOS/UEFI está desatualizada, e o cooler sujo não tem relação com o problema."
                ],
                correta: 0
            },
            {
                pergunta: "Na sala de informática, Maria recebeu uma mensagem: \"Você ganhou um prêmio! Clique aqui\". Ela clicou e o firewall exibiu um alerta de que bloqueou uma conexão com um endereço IP desconhecido. O que o firewall fez e qual é o próximo passo correto?",
                alternativas: [
                    "Barrou uma conexão suspeita entre o computador e a internet; Maria deve avisar o professor e não repetir o clique.",
                    "Removeu o vírus do SSD; como o problema foi resolvido, Maria pode clicar em links iguais sem risco.",
                    "Mudou o endereço IP do computador; Maria deve apenas reiniciá-lo.",
                    "Apagou a mensagem do e-mail; Maria não precisa avisar ninguém."
                ],
                correta: 0
            },
            {
                pergunta: "Rafael baixou um arquivo chamado \"f?rias.jpg.exe\" e achou que era uma foto. O que a extensão do arquivo indica e qual é a atitude mais segura?",
                alternativas: [
                    "É um programa executável disfarçado de imagem; ele não deve abri-lo e deve avisar um adulto.",
                    "É uma foto de alta qualidade; ele pode abri-la, porque \".jpg\" aparece no nome.",
                    "É um vídeo; ele deve abri-lo apenas com o som desligado.",
                    "É uma pasta; ele deve movê-la para o SSD antes de abrir."
                ],
                correta: 0
            },
            {
                pergunta: "O Vírus Misterioso invadiu o computador da escola. O computador está lento, abre pastas sozinho e envia dados pela internet. Qual sequência de ações é a mais adequada?",
                alternativas: [
                    "Desconectar o computador da rede, avisar o responsável, atualizar o antivírus e ativar o firewall, e só depois voltar a usar os arquivos do SSD.",
                    "Apenas desligar e ligar de novo: como a RAM é volátil, o vírus será apagado junto com ela.",
                    "Trocar a placa-mãe, pois é nela que o vírus fica guardado.",
                    "Instalar mais RAM, pois a lentidão e o envio de dados são causados por falta de memória."
                ],
                correta: 0
            }
        ],
        chefe: true
    }
};

const aulasPersonagens = {
    cpu: {
        conceito: "A CPU e o processador: interpreta instruções e coordena operacoes do computador.",
        funcionamento: "Ela busca, interpreta e executa instruções usando um ou mais núcleos.",
        exemplo: "Ao abrir uma planilha, a CPU calcula fórmulas e coordena a resposta do sistema.",
        naoConfunda: "GHz mede ciclos de clock, mas não determina sozinho o desempenho: arquitetura e núcleos tamb?m importam."
    },
    ram: {
        conceito: "A RAM e a memória de trabalho, rápida e temporária, usada pelos programas em execucao.",
        funcionamento: "O armazenamento envia para a RAM os dados que a CPU vai usar; ao fechar um programa, o espaço e liberado.",
        exemplo: "Cada aba aberta do navegador ocupa RAM; muitas abas podem deixar tudo lento.",
        naoConfunda: "Mais RAM não aumenta o espaço para guardar fotos; isso depende do armazenamento."
    },
    ssd: {
        conceito: "O SSD e um armazenamento permanente de estado sólido baseado em memória flash.",
        funcionamento: "Ele grava e le dados em chips de memória flash e fornece ao sistema os arquivos que serao usados.",
        exemplo: "Um jogo instalado ocupa espaço no SSD e, ao abrir, parte dele e carregada na RAM.",
        naoConfunda: "SSD guarda; RAM trabalha. O HD antigo tem disco giratório, o SSD não."
    },
    gpu: {
        conceito: "A GPU e especializada em executar muitos calculos gráficos em paralelo.",
        funcionamento: "Ela calcula cor e posição de milhões de pixels e envia o resultado ao monitor.",
        exemplo: "Em um jogo, a GPU calcula sombras, cores e a imagem que aparece no monitor.",
        naoConfunda: "GPU não e monitor nem CPU; PCs simples podem usar GPU integrada."
    },
    placamae: {
        conceito: "A placa-m?e e a placa de circuito principal que interliga todos os componentes.",
        funcionamento: "Seus barramentos transportam dados e energia; o BIOS/UEFI inicia o hardware ao ligar.",
        exemplo: "Ao trocar a RAM, voc? encaixa o novo pente no slot da placa.",
        naoConfunda: "Nem toda CPU ou RAM serve em toda placa; ? preciso verificar compatibilidade."
    },
    firewall: {
        conceito: "Firewall e uma barreira de segurança que filtra o tráfego de rede conforme regras.",
        funcionamento: "Ele analisa conexões e permite ou bloqueia o tráfego.",
        exemplo: "Quando o sistema pergunta se um programa pode acessar a rede, o firewall está agindo.",
        naoConfunda: "Firewall não e antivírus: um filtra conexões, o outro procura ameaças nos arquivos."
    },
    internet: {
        conceito: "A Internet e a rede mundial que interliga redes menores.",
        funcionamento: "Os dados viajam em pacotes usando endereços IP; o DNS traduz nomes em IPs.",
        exemplo: "Ao abrir um video, seu pedido vai a um servidor e os pacotes voltam ao aparelho.",
        naoConfunda: "Internet não e Wi-Fi nem navegador; a Web e um serviço sobre a Internet."
    },
    arquivos: {
        conceito: "Arquivo e a unidade de dados identificada por nome, tipo e tamanho.",
        funcionamento: "O sistema de arquivos organiza dados em pastas e registra onde cada arquivo está no SSD.",
        exemplo: "foto.jpg dentro da pasta Imagens.",
        naoConfunda: "Arquivo e dado (software); SSD e o hardware que o guarda."
    },
    virus: {
        conceito: "Virus e um malware criado para se espalhar ou executar ações prejudiciais.",
        funcionamento: "Ele pode explorar vulnerabilidades, enganar usu?rios ou alterar arquivos.",
        exemplo: "Um anexo malicioso pode instalar um programa que rouba dados quando aberto.",
        naoConfunda: "Nem todo problema do computador e virus; lentidão tamb?m pode vir de falta de RAM ou armazenamento cheio."
    }
};
