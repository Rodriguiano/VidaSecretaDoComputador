/* =====================================================
   BANCO DE PERSONAGENS E DESAFIOS
   Conteudo baseado no roteiro instrucional do projeto.
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
            "Ola, Agente Digital! Eu sou a CPU, a Unidade Central de Processamento.",
            "Sou o cerebro do computador: tudo o que voce pede passa por mim.",
            "Pense em um maestro: eu leio a partitura (as instrucoes) e digo a cada parte do computador quando agir.",
            "Executo instrucoes uma apos a outra, muito depressa. Minha velocidade e medida em GHz: 3 GHz sao 3 bilhoes de ciclos por segundo.",
            "Mas velocidade nao e tudo: meus nucleos permitem fazer varias tarefas ao mesmo tempo. E eu esquento, por isso preciso de cooler e pasta termica.",
            "Agora que voce me conhece melhor, esta preparado para testar seus conhecimentos?"
        ],
        curiosidade: "O que sou: o processador; busco, interpreto e executo as instrucoes dos programas.\n\nComo trabalho: repito o ciclo buscar → interpretar → executar bilhoes de vezes por segundo, usando um ou mais nucleos.\n\nExemplo no cotidiano: ao abrir uma planilha, calculo as formulas e coordeno a resposta do sistema.\n\nNao confunda: GHz sozinho nao define o desempenho; nucleos e arquitetura tambem importam. CPU nao e o gabinete.",
        perguntas: [
            desafio("Um colega disse: \"a CPU e onde ficam guardados meus programas e fotos\". Qual explicacao corrige melhor essa frase?", [
                "Esta certo, a CPU e o componente mais importante.",
                "A CPU nao guarda arquivos: ela executa as instrucoes dos programas.",
                "A CPU so serve para ligar o computador."
            ], 1, [
                "Ser importante nao significa guardar dados; guardar e funcao do armazenamento.",
                "Exato! Quem guarda e o SSD; a CPU processa.",
                "Ela trabalha o tempo todo, executando instrucoes."
            ], "Pense em quem pensa e quem guarda."),
            desafio("Ana compara duas CPUs: X (4,0 GHz, 2 nucleos) e Y (3,2 GHz, 8 nucleos). Para editar video com varios programas abertos, qual tende a ser melhor?", [
                "X, pois mais GHz sempre vence.",
                "Y, pois mais nucleos executam mais tarefas ao mesmo tempo.",
                "Tanto faz, GHz nao importa."
            ], 1, [
                "GHz e importante, mas nao e o unico fator.",
                "Para tarefas pesadas e simultaneas, mais nucleos costumam compensar.",
                "Importa, so que nao sozinho."
            ], "Quantas tarefas cada uma consegue fazer ao mesmo tempo?"),
            desafio("Durante um jogo pesado, o PC desliga sozinho. O cooler da CPU esta entupido de poeira. Qual a causa mais provavel?", [
                "A CPU superaqueceu e desligou o computador para se proteger.",
                "A CPU esqueceu os programas.",
                "O SSD esta sem espaco."
            ], 0, [
                "Sem dissipar calor, a CPU ultrapassa a temperatura segura e o sistema desliga.",
                "A CPU nao guarda programas; o sintoma aponta para a refrigeracao.",
                "SSD cheio deixa o PC lento, mas nao o desliga por calor."
            ], "Poeira no cooler atrapalha o que?")
        ]
    },

    ram: {
        nome: "RAM",
        imagem: "../img/personagens/ram.png",
        dialogos: [
            "Oi, Agente! Eu sou a RAM, a memoria de acesso aleatorio.",
            "Sou a memoria de trabalho: guardo o que voce esta usando agora para a CPU pegar rapidinho.",
            "Sou como a bancada de uma cozinha: so cabe o que esta sendo preparado agora. O resto fica no armario (o SSD).",
            "Sou volatil: quando o computador desliga, tudo o que esta em mim e apagado. Por isso e importante salvar seu trabalho!",
            "Minha capacidade e medida em GB. Com pouca RAM, o computador fica lento, porque nao cabe tudo na bancada.",
            "Pronto para o desafio?"
        ],
        curiosidade: "O que sou: memoria temporaria e muito rapida, onde ficam os programas e dados em uso.\n\nComo trabalho: recebo do armazenamento o que a CPU vai precisar; quando voce fecha um programa, o espaco e liberado.\n\nExemplo no cotidiano: cada aba aberta do navegador ocupa RAM; muitas abas podem deixar tudo lento.\n\nNao confunda: mais RAM nao aumenta o espaco para guardar fotos; isso depende do armazenamento.",
        perguntas: [
            desafio("Qual explicacao descreve melhor a diferenca entre RAM e SSD?", [
                "A RAM e permanente e o SSD e temporario.",
                "A RAM guarda temporariamente o que esta em uso; o SSD guarda de forma permanente.",
                "Sao a mesma coisa com nomes diferentes."
            ], 1, [
                "E o contrario.",
                "Isso mesmo! Por isso a RAM e rapida e o SSD guarda tudo mesmo desligado.",
                "Tem funcoes e comportamentos diferentes."
            ], "O que acontece com cada um quando o PC e desligado?"),
            desafio("Voce escrevia um trabalho e a energia acabou antes de salvar. O que acontece com o texto que so estava na tela?", [
                "Foi perdido, pois estava apenas na RAM.",
                "Foi automaticamente para o SSD.",
                "A CPU o guardou."
            ], 0, [
                "Dados nao salvos ficam na RAM, que e volatil. Alguns programas tem salvamento automatico, que cria copias no SSD.",
                "So vai para o SSD quando e salvo.",
                "A CPU processa, nao guarda dados."
            ], "Onde fica o que ainda nao foi salvo?"),
            desafio("O PC de Bruno fica lento com 30 abas e 3 programas abertos, embora o SSD tenha 500 GB livres. Qual a causa mais provavel?", [
                "Falta de espaco no SSD.",
                "A RAM esta cheia: os programas abertos ocupam mais memoria de trabalho do que cabe.",
                "A internet esta desligada."
            ], 1, [
                "O SSD tem muito espaco livre.",
                "A lentidao aparece quando a RAM se esgota.",
                "Isso nao explica lentidao geral do sistema."
            ], "O problema surge ao abrir muita coisa ao mesmo tempo.")
        ]
    },

    ssd: {
        nome: "SSD",
        imagem: "../img/personagens/ssd.png",
        dialogos: [
            "Ola, Agente! Eu sou o SSD (Solid State Drive).",
            "Guardo seus arquivos, programas e o sistema operacional, mesmo com o computador desligado.",
            "Sou o armario da cozinha: tudo fica guardado ali ate alguem precisar.",
            "Uso memoria flash, sem pecas que giram, por isso sou mais rapido e silencioso que o antigo HD.",
            "Minha capacidade se mede em GB ou TB. Quando encho, nao cabem arquivos novos.",
            "Vamos ao desafio?"
        ],
        curiosidade: "O que sou: armazenamento permanente de estado solido.\n\nComo trabalho: gravo e leio dados em chips de memoria flash; o computador copia para a RAM o que vai usar.\n\nExemplo no cotidiano: um jogo instalado ocupa espaco no SSD; ao abri-lo, parte dele e carregada na RAM.\n\nNao confunda: SSD guarda; RAM trabalha. O HD antigo tem disco giratorio, o SSD nao.",
        perguntas: [
            desafio("Por que um PC com SSD costuma abrir programas mais rapido que um com HD tradicional?", [
                "O SSD usa memoria flash, sem partes mecanicas que precisam girar.",
                "O SSD e maior fisicamente.",
                "O SSD faz calculos mais rapido que a CPU."
            ], 0, [
                "Sem pecas moveis, o acesso aos dados e bem mais rapido.",
                "O tamanho fisico nao explica a velocidade.",
                "O SSD so armazena; quem calcula e a CPU."
            ], "Pense no que o HD precisa fazer fisicamente para ler dados."),
            desafio("Lia quer guardar 200 fotos e instalar 3 jogos grandes, mas o PC avisa que o armazenamento esta cheio. Qual a melhor solucao?", [
                "Comprar mais RAM.",
                "Apagar o que nao usa ou aumentar o armazenamento.",
                "Trocar o cooler."
            ], 1, [
                "RAM nao aumenta o espaco de armazenamento.",
                "A solucao e liberar espaco ou instalar um SSD maior.",
                "O cooler cuida da temperatura."
            ], "O aviso fala de armazenamento."),
            desafio("Apos reiniciar o PC, os arquivos salvos continuam la, mas os programas que estavam abertos fecharam. O que explica isso?", [
                "Os arquivos estavam no SSD (permanente); o que estava em execucao ficava na RAM (temporaria).",
                "Tudo estava na RAM e so alguns dados sobreviveram.",
                "Os arquivos estavam dentro da CPU."
            ], 0, [
                "Reiniciar limpa a RAM, mas o SSD preserva os dados.",
                "Se estivessem so na RAM, os arquivos teriam sumido tambem.",
                "A CPU nao armazena arquivos."
            ], "Um guarda para sempre, o outro so enquanto esta ligado.")
        ]
    },

    gpu: {
        nome: "GPU",
        imagem: "../img/personagens/gpu.png",
        dialogos: [
            "Ola, Agente! Eu sou a GPU, a Unidade de Processamento Grafico.",
            "Crio as imagens, videos e animacoes que aparecem na sua tela.",
            "A CPU faz poucas tarefas complexas. Eu faco milhares de contas simples ao mesmo tempo, como uma grande equipe de pintores.",
            "Isso e perfeito para calcular a cor de milhoes de pixels a cada segundo em jogos, videos e edicao.",
            "Posso vir integrada ao processador ou numa placa de video dedicada, com memoria propria (VRAM).",
            "Pronto para o desafio?"
        ],
        curiosidade: "O que sou: processador especializado em graficos.\n\nComo trabalho: calculo cor e posicao de milhoes de pixels em paralelo e envio o resultado ao monitor.\n\nExemplo no cotidiano: jogos 3D, videos em alta resolucao e edicao de imagem.\n\nNao confunda: GPU nao e o monitor e nao e a CPU. PCs simples usam GPU integrada.",
        perguntas: [
            desafio("Por que a GPU e boa para desenhar imagens na tela?", [
                "Executa uma so conta por vez, mas muito rapido.",
                "Faz muitas contas simples ao mesmo tempo, como calcular cada pixel.",
                "Guarda as imagens permanentemente."
            ], 1, [
                "Isso descreve melhor um nucleo de CPU.",
                "Esse processamento paralelo combina com graficos.",
                "Armazenar e funcao do SSD."
            ], "Uma tela tem milhoes de pixels para calcular juntos."),
            desafio("Rui quer jogar jogos 3D modernos e editar videos 4K. Qual melhoria no PC tera mais impacto direto?", [
                "Uma placa de video dedicada.",
                "Um teclado melhor.",
                "Mais portas USB."
            ], 0, [
                "Graficos pesados dependem muito da GPU.",
                "Isso nao afeta o desempenho grafico.",
                "Isso nao afeta o processamento de imagens."
            ], "Qual componente cuida de graficos?"),
            desafio("O monitor de Dani mostra a area de trabalho normalmente, mas em jogos trava e roda com poucos quadros por segundo. Qual hipotese e mais coerente?", [
                "O monitor esta sem energia.",
                "A GPU (integrada) nao da conta da carga grafica dos jogos.",
                "O SSD esta sem arquivos."
            ], 1, [
                "Se estivesse, nada apareceria.",
                "Tarefas simples funcionam; as pesadas exigem mais da GPU.",
                "Isso nao causa queda de quadros."
            ], "O problema so aparece em tarefa pesada.")
        ]
    },

    placamae: {
        nome: "Placa-mae",
        imagem: "../img/personagens/placamae.png",
        dialogos: [
            "Ola, Agente! Eu sou a Placa-mae.",
            "Sou a grande placa onde todos os componentes sao encaixados e conectados.",
            "Pense em mim como uma cidade com ruas: levo energia e informacao de um lugar a outro.",
            "Tenho o soquete da CPU, os slots da RAM, os conectores do SSD e o espaco da placa de video.",
            "Os caminhos por onde os dados circulam se chamam barramentos. E nem tudo encaixa em mim: e preciso haver compatibilidade.",
            "Vamos ao desafio?"
        ],
        curiosidade: "O que sou: a placa de circuito principal que interliga todos os componentes.\n\nComo trabalho: meus barramentos transportam dados e energia; o firmware (BIOS/UEFI) inicia o hardware ao ligar.\n\nExemplo no cotidiano: ao trocar a RAM, voce encaixa o novo pente no slot da placa.\n\nNao confunda: nem toda CPU ou RAM serve em toda placa; e preciso checar o soquete e o tipo de memoria.",
        perguntas: [
            desafio("Qual frase explica melhor o papel da placa-mae?", [
                "Executa os programas no lugar da CPU.",
                "Interliga os componentes e permite que eles se comuniquem.",
                "Guarda os arquivos do usuario."
            ], 1, [
                "Quem executa e a CPU.",
                "E a base que conecta tudo.",
                "Isso e funcao do SSD."
            ], "Pense em conexao."),
            desafio("Voce comprou uma CPU nova, mas ela nao encaixa na placa-mae do seu PC. O que deveria ter verificado antes?", [
                "Se o soquete da placa e compativel com a CPU.",
                "Se a CPU combina com a cor do gabinete.",
                "Quantos GB tem o monitor."
            ], 0, [
                "Cada placa so aceita certos tipos de CPU.",
                "Cor nao influencia.",
                "Monitor nao tem relacao com o encaixe."
            ], "Onde a CPU se encaixa na placa?"),
            desafio("Uma RAM funciona no PC de um amigo, mas nao no seu, mesmo sendo uma memoria nova. Qual a explicacao mais provavel?", [
                "A RAM so funciona uma vez.",
                "As placas-mae usam tipos de memoria diferentes (por exemplo, DDR4 e DDR5).",
                "O SSD bloqueia a RAM."
            ], 1, [
                "Nao existe essa limitacao.",
                "Memoria e placa precisam ser compativeis.",
                "O SSD nao interfere nisso."
            ], "O que precisa combinar entre a placa e a memoria?")
        ]
    },

    firewall: {
        nome: "Firewall",
        imagem: "../img/personagens/firewall.png",
        dialogos: [
            "Ola, Agente! Eu sou o Firewall, o guardiao do sistema.",
            "Fico entre o seu computador e a rede, vigiando tudo que entra e sai.",
            "Sou como o porteiro de um predio: confiro quem quer entrar e barro quem nao deveria.",
            "Sigo regras: permito conexoes seguras e bloqueio as suspeitas.",
            "Mas nao sou magico: nao impeco voce de abrir um arquivo perigoso. Use antivirus, atualize o sistema e desconfie de links!",
            "Pronto para o desafio?"
        ],
        curiosidade: "O que sou: uma barreira de seguranca que filtra o trafego de rede.\n\nComo trabalho: analiso as conexoes e aplico regras para permitir ou bloquear.\n\nExemplo no cotidiano: quando o sistema pergunta se um programa pode acessar a rede, o firewall esta agindo.\n\nNao confunda: firewall nao e antivirus; um filtra conexoes, o outro procura e remove ameacas nos arquivos.",
        perguntas: [
            desafio("Qual explicacao descreve melhor o que o firewall faz?", [
                "Filtra o trafego de rede segundo regras, permitindo ou bloqueando conexoes.",
                "Remove arquivos infectados do computador.",
                "Aumenta a velocidade da internet."
            ], 0, [
                "E o porteiro da rede.",
                "Isso e funcao do antivirus.",
                "Seguranca nao e velocidade."
            ], "Lembre da analogia do porteiro."),
            desafio("Um site desconhecido tenta conectar ao seu PC sem voce ter pedido, e o firewall mostra um alerta. O que fazer?", [
                "Permitir sempre, para evitar problemas.",
                "Bloquear, ja que voce nao solicitou essa conexao.",
                "Desligar o firewall."
            ], 1, [
                "Liberar conexoes desconhecidas abre brechas.",
                "Na duvida, bloqueie.",
                "Isso deixaria o PC desprotegido."
            ], "Voce pediu essa conexao?"),
            desafio("Marcos manteve o firewall ligado, mas o PC foi infectado apos ele abrir um anexo de e-mail desconhecido. Por que o firewall nao evitou?", [
                "Porque o firewall nao serve para nada.",
                "O firewall filtra trafego de rede, mas foi o usuario quem executou o arquivo; a protecao tambem depende de antivirus e atencao.",
                "O virus entrou pelo monitor."
            ], 1, [
                "Ele protege, mas contra outro tipo de risco.",
                "Seguranca tem varias camadas, incluindo o usuario.",
                "Isso nao existe."
            ], "Quem abriu o arquivo?")
        ]
    },

    internet: {
        nome: "Internet",
        imagem: "../img/personagens/internet.png",
        dialogos: [
            "Ola, Agente! Eu sou a Internet.",
            "Sou uma rede gigante que conecta bilhoes de computadores e dispositivos do mundo.",
            "Imagine os Correios: sua mensagem e dividida em pacotes, que viajam por varias rotas e se juntam no destino.",
            "Cada dispositivo tem um endereco, o IP. E o DNS traduz nomes como site.com em enderecos IP.",
            "Roteadores e cabos levam os pacotes. O Wi-Fi e so a forma sem fio de chegar ate o roteador.",
            "Vamos ao desafio?"
        ],
        curiosidade: "O que sou: a rede mundial que interliga redes menores.\n\nComo trabalho: divido os dados em pacotes e os encaminho usando enderecos IP; o DNS traduz nomes em IPs.\n\nExemplo no cotidiano: ao abrir um video, seu pedido vai a um servidor e os pacotes voltam ao seu aparelho.\n\nNao confunda: Internet nao e Wi-Fi, e nao e o navegador. A Web e um servico que funciona sobre a internet.",
        perguntas: [
            desafio("Qual explicacao descreve melhor o papel do DNS?", [
                "Traduz nomes de sites em enderecos IP.",
                "Protege contra virus.",
                "Guarda as paginas no SSD."
            ], 0, [
                "E como uma lista telefonica da internet.",
                "Isso e funcao de antivirus e firewall.",
                "O DNS nao armazena paginas."
            ], "Nomes sao faceis para pessoas; numeros para maquinas."),
            desafio("O Wi-Fi da casa mostra sinal completo, mas nenhum site abre, nem no celular. Qual a primeira acao mais logica?", [
                "Reiniciar o roteador/modem e verificar o servico do provedor.",
                "Trocar a placa de video.",
                "Formatar o SSD."
            ], 0, [
                "O problema esta na conexao com a internet, nao no computador.",
                "Nao tem relacao com acesso a rede.",
                "Seria exagero e nao resolveria."
            ], "Se o celular tambem falha, o problema e do computador?"),
            desafio("Maria acessa um site digitando o endereco numerico (IP) e funciona, mas pelo nome ele nao abre. O que isso indica?", [
                "Problema no DNS, que traduz nomes em IPs.",
                "O computador esta sem energia.",
                "A RAM esta cheia."
            ], 0, [
                "A conexao funciona; falha so a traducao do nome.",
                "Se estivesse, nada abriria.",
                "Nao explicaria falhar so pelo nome."
            ], "O que muda entre digitar o IP e digitar o nome?")
        ]
    },

    arquivos: {
        nome: "Arquivos",
        imagem: "../img/personagens/arquivos.png",
        dialogos: [
            "Ola, Agente! Eu sou o Arquivo. Nao sou uma peca fisica: represento o mundo do software e dos dados.",
            "Todo texto, foto, musica ou programa e guardado como um arquivo, com nome e extensao.",
            "Imagine uma biblioteca: os arquivos sao os livros e as pastas sao as estantes que os organizam.",
            "A extensao (.docx, .jpg, .mp3) indica o tipo, e o sistema sabe qual programa abre cada um.",
            "Quem organiza onde tudo fica no SSD e o sistema de arquivos. E faca backup: copias em outro lugar evitam perder tudo!",
            "Pronto para o desafio?"
        ],
        curiosidade: "O que sou: a unidade com que o computador guarda informacao, com nome, tipo e tamanho.\n\nComo trabalho: o sistema de arquivos organiza tudo em pastas e registra onde cada arquivo esta no SSD.\n\nExemplo no cotidiano: foto.jpg dentro da pasta Imagens.\n\nNao confunda: arquivo e dado (software); SSD e o hardware que o guarda.",
        perguntas: [
            desafio("O que a extensao de um arquivo (como .jpg ou .docx) informa?", [
                "O tipo do arquivo, ajudando o sistema a escolher o programa para abri-lo.",
                "A velocidade da CPU.",
                "O tamanho da RAM."
            ], 0, [
                "A extensao identifica o formato.",
                "Nao tem relacao.",
                "Nao tem relacao."
            ], "Ela vem depois do ponto no nome."),
            desafio("Pedro tem 300 fotos, trabalhos e musicas misturados na area de trabalho e nao encontra nada. Qual a melhor acao?", [
                "Criar pastas por categoria e mover os arquivos.",
                "Comprar mais RAM.",
                "Renomear todos como arquivo."
            ], 0, [
                "Pastas organizam e facilitam a busca.",
                "Nao resolve desorganizacao.",
                "Nomes iguais pioram a confusao."
            ], "Lembre da biblioteca."),
            desafio("O notebook de Carla queimou e ela perdeu todos os trabalhos, que so existiam nele. O que teria evitado a perda?", [
                "Ter copias de seguranca (backup) em outro local, como nuvem ou HD externo.",
                "Dar outro nome as pastas.",
                "Ter mais GHz na CPU."
            ], 0, [
                "Uma copia separada sobrevive a falhas do equipamento.",
                "Nao protege contra falha de hardware.",
                "Velocidade nao protege dados."
            ], "Onde estava a unica copia?")
        ]
    },

    virus: {
        nome: "Vírus Misterioso",
        imagem: "../img/personagens/virus.png",
        dialogos: [
            "Hahaha! Entao voce e o Agente Digital que se acha capaz de me deter?",
            "Eu me espalho por links falsos, anexos e programas piratas, e invado quem se descuida.",
            "Ja derrubei varios sistemas. Mas se voce prestou atencao nos habitantes, sabe como me enfrentar.",
            "Vou testar tudo o que voce aprendeu. Cada resposta certa me enfraquece!",
            "Se errar, eu me fortaleço, mas voce podera tentar de novo e aprender com a explicacao."
        ],
        perguntasChefe: [
            desafio("Qual associacao componente-funcao esta correta?", [
                "Placa-mae: executa os programas.",
                "GPU: gera as imagens exibidas na tela.",
                "SSD: guarda dados so enquanto o PC esta ligado."
            ], 1, [
                "Quem executa e a CPU.",
                "A GPU gera as imagens exibidas na tela.",
                "Isso descreve a RAM."
            ]),
            desafio("Seu PC fica lento ao abrir muitos programas, mas o SSD tem bastante espaco livre. Qual melhoria e mais indicada?", [
                "Aumentar a RAM.",
                "Trocar o monitor.",
                "Comprar outro teclado."
            ], 0, [
                "Mais memoria de trabalho comporta mais programas abertos.",
                "Nao afeta a velocidade.",
                "Nao afeta a velocidade."
            ]),
            desafio("Qual combinacao reduz mais o risco de infeccao por um link malicioso?", [
                "Firewall ligado, antivirus atualizado e desconfiar de links desconhecidos.",
                "Apenas aumentar a RAM.",
                "Apenas trocar o cooler."
            ], 0, [
                "Seguranca em camadas, incluindo o comportamento do usuario.",
                "RAM nao protege.",
                "Cooler cuida da temperatura."
            ]),
            desafio("Um PC com 16 GB de RAM, SSD de 1 TB quase vazio e CPU de 8 nucleos trava somente ao jogar. O que investigar primeiro?", [
                "A GPU, que pode ser fraca para a carga grafica.",
                "O espaco do SSD.",
                "O nome do Wi-Fi."
            ], 0, [
                "So trava em jogos, sinal de limite grafico.",
                "Esta quase vazio.",
                "Nao tem relacao."
            ]),
            desafio("Ana diz: \"para nao perder meu trabalho basta deixa-lo aberto, pois a RAM guarda tudo\". Bia diz: \"e preciso salvar no SSD ou na nuvem\". Quem tem razao?", [
                "Ana.",
                "Bia: salvar grava o arquivo em armazenamento permanente.",
                "As duas, pois da no mesmo."
            ], 1, [
                "A RAM e volatil: se faltar energia, o conteudo se perde.",
                "Salvar grava o arquivo em armazenamento permanente.",
                "Ha diferenca entre dado temporario e permanente."
            ])
        ],
        chefe: true
    }
};

const aulasPersonagens = {
    cpu: {
        conceito: "A CPU e o processador: interpreta instrucoes e coordena operacoes do computador.",
        funcionamento: "Ela busca, interpreta e executa instrucoes usando um ou mais nucleos.",
        exemplo: "Ao abrir uma planilha, a CPU calcula formulas e coordena a resposta do sistema.",
        naoConfunda: "GHz mede ciclos de clock, mas nao determina sozinho o desempenho: arquitetura e nucleos tambem importam."
    },
    ram: {
        conceito: "A RAM e a memoria de trabalho, rapida e temporaria, usada pelos programas em execucao.",
        funcionamento: "O armazenamento envia para a RAM os dados que a CPU vai usar; ao fechar um programa, o espaco e liberado.",
        exemplo: "Cada aba aberta do navegador ocupa RAM; muitas abas podem deixar tudo lento.",
        naoConfunda: "Mais RAM nao aumenta o espaco para guardar fotos; isso depende do armazenamento."
    },
    ssd: {
        conceito: "O SSD e um armazenamento permanente de estado solido baseado em memoria flash.",
        funcionamento: "Ele grava e le dados em chips de memoria flash e fornece ao sistema os arquivos que serao usados.",
        exemplo: "Um jogo instalado ocupa espaco no SSD e, ao abrir, parte dele e carregada na RAM.",
        naoConfunda: "SSD guarda; RAM trabalha. O HD antigo tem disco giratorio, o SSD nao."
    },
    gpu: {
        conceito: "A GPU e especializada em executar muitos calculos graficos em paralelo.",
        funcionamento: "Ela calcula cor e posicao de milhoes de pixels e envia o resultado ao monitor.",
        exemplo: "Em um jogo, a GPU calcula sombras, cores e a imagem que aparece no monitor.",
        naoConfunda: "GPU nao e monitor nem CPU; PCs simples podem usar GPU integrada."
    },
    placamae: {
        conceito: "A placa-mae e a placa de circuito principal que interliga todos os componentes.",
        funcionamento: "Seus barramentos transportam dados e energia; o BIOS/UEFI inicia o hardware ao ligar.",
        exemplo: "Ao trocar a RAM, voce encaixa o novo pente no slot da placa.",
        naoConfunda: "Nem toda CPU ou RAM serve em toda placa; e preciso verificar compatibilidade."
    },
    firewall: {
        conceito: "Firewall e uma barreira de seguranca que filtra o trafego de rede conforme regras.",
        funcionamento: "Ele analisa conexoes e permite ou bloqueia o trafego.",
        exemplo: "Quando o sistema pergunta se um programa pode acessar a rede, o firewall esta agindo.",
        naoConfunda: "Firewall nao e antivirus: um filtra conexoes, o outro procura ameacas nos arquivos."
    },
    internet: {
        conceito: "A Internet e a rede mundial que interliga redes menores.",
        funcionamento: "Os dados viajam em pacotes usando enderecos IP; o DNS traduz nomes em IPs.",
        exemplo: "Ao abrir um video, seu pedido vai a um servidor e os pacotes voltam ao aparelho.",
        naoConfunda: "Internet nao e Wi-Fi nem navegador; a Web e um servico sobre a Internet."
    },
    arquivos: {
        conceito: "Arquivo e a unidade de dados identificada por nome, tipo e tamanho.",
        funcionamento: "O sistema de arquivos organiza dados em pastas e registra onde cada arquivo esta no SSD.",
        exemplo: "foto.jpg dentro da pasta Imagens.",
        naoConfunda: "Arquivo e dado (software); SSD e o hardware que o guarda."
    },
    virus: {
        conceito: "Virus e um malware criado para se espalhar ou executar acoes prejudiciais.",
        funcionamento: "Ele pode explorar vulnerabilidades, enganar usuarios ou alterar arquivos.",
        exemplo: "Um anexo malicioso pode instalar um programa que rouba dados quando aberto.",
        naoConfunda: "Nem todo problema do computador e virus; lentidao tambem pode vir de falta de RAM ou armazenamento cheio."
    }
};
