/* =====================================================
   BANCO DE PERSONAGENS & MISSÕES EXPANDIDAS
   Vida Secreta do Computador
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
    carregarPersonagem();
});

const personagens = {
    cpu: {
        nome: "CPU (Processador)",
        imagem: "../img/personagens/cpu.png",
        dialogos: [
            "Olá, Agente Digital! Eu sou a CPU, a Unidade Central de Processamento.",
            "Sou conhecida em todo o sistema como o cérebro do computador!",
            "Minha função é interpretar comandos, realizar cálculos matemáticos e coordenar as tarefas.",
            "Trabalho em uma frequência incrivelmente alta, executando bilhões de ciclos por segundo (GHz).",
            "Como trabalho muito duro, acabo esquentando bastante, por isso preciso da ajuda de um cooler e pasta térmica!",
            "Agora que você me conhece melhor, está preparado para testar seus conhecimentos no meu desafio?"
        ],
        curiosidade: "A CPU executa bilhões de instruções por segundo! Para evitar o superaquecimento, ela usa uma pasta térmica especial e um cooler (ventilador ou refrigeração líquida) para manter a temperatura segura.",
        pergunta: "Qual é a principal função da CPU no computador?",
        alternativas: ["Armazenar fotos permanentemente", "Executar instruções e realizar cálculos do sistema", "Conectar o computador à rede wi-fi"],
        correta: 1,
        perguntas: [
            {
                pergunta: "Qual é a principal função da CPU (Unidade Central de Processamento)?",
                alternativas: [
                    "Armazenar fotos e músicas permanentemente",
                    "Executar instruções e realizar cálculos para o funcionamento do sistema",
                    "Apenas emitir sons e acender luzes no gabinete"
                ],
                correta: 1
            },
            {
                pergunta: "O que mede a velocidade de processamento de uma CPU moderna?",
                alternativas: [
                    "Gigabytes (GB)",
                    "Gigahertz (GHz)",
                    "Polegadas (\")"
                ],
                correta: 1
            },
            {
                pergunta: "O que a CPU utiliza para dissipar calor e não superaquecer durante tarefas pesadas?",
                alternativas: [
                    "Cooler (ventilador/sistema de refrigeração) e pasta térmica",
                    "Filtro de linha elétrico e cabo HDMI",
                    "Um leitor de cartão de memória"
                ],
                correta: 0
            }
        ]
    },

    ram: {
        nome: "Memória RAM",
        imagem: "../img/personagens/ram.png",
        dialogos: [
            "Oi, Agente! Eu sou a memória RAM (Memória de Acesso Aleatório).",
            "Minha missão é guardar temporariamente todas as informações dos aplicativos que você está usando agora!",
            "Sou super rápida e permito que o computador abra vários programas e abas de navegador ao mesmo tempo.",
            "Porém, tenho um segredo: sou uma memória 'volátil'. Isso significa que não guardo nada para sempre.",
            "Assim que o computador é desligado ou reiniciado, todos os dados da minha memória desaparecem limpos!",
            "Pronto para mostrar que entendeu a diferença entre memória rápida e armazenamento?"
        ],
        curiosidade: "A memória RAM lê e grava dados em nanossegundos! Porém, por ser volátil, se a energia cair antes de você salvar um documento no Word ou no SSD, o trabalho é perdido.",
        pergunta: "O que acontece com os dados armazenados na RAM quando o computador é desligado?",
        alternativas: ["Eles são apagados completamente", "Eles ficam salvos para sempre", "Eles são enviados automaticamente para a nuvem"],
        correta: 0,
        perguntas: [
            {
                pergunta: "Por que a memória RAM é chamada de memória 'volátil'?",
                alternativas: [
                    "Porque ela dura para sempre sem precisar de energia",
                    "Porque seus dados são apagados quando o computador é desligado",
                    "Porque ela serve apenas para aumentar a resolução da tela"
                ],
                correta: 1
            },
            {
                pergunta: "O que acontece quando você tenta abrir muitos jogos e programas pesados ao mesmo tempo sem ter RAM suficiente?",
                alternativas: [
                    "O computador fica muito lento ou trava por falta de memória temporária",
                    "O monitor troca de cor para verde automaticamente",
                    "Os arquivos do computador são excluídos sozinhos"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é a diferença fundamental entre a memória RAM e o SSD?",
                alternativas: [
                    "A RAM guarda arquivos permanentes e o SSD apaga tudo ao desligar",
                    "A RAM guarda dados temporários de programas abertos, enquanto o SSD salva arquivos permanentemente",
                    "Não existe diferença, ambas são exatamente o mesmo componente"
                ],
                correta: 1
            }
        ]
    },

    ssd: {
        nome: "SSD (Armazenamento)",
        imagem: "../img/personagens/ssd.png",
        dialogos: [
            "Olá! Eu sou o SSD, a Unidade de Estado Sólido.",
            "Diferente da minha amiga RAM, eu sou um armazenamento não-volátil. Tudo o que você me entrega fica salvo com segurança!",
            "Guardo seus jogos, trabalhos, fotos, músicas e o próprio Sistema Operacional.",
            "Não tenho partes mecânicas como os antigos HDs metálicos giratórios. Uso tecnologia de memória Flash NAND!",
            "Por causa disso, sou até 10 vezes mais rápido que um HD tradicional e muito mais resistente a impactos.",
            "Que tal testar se você sabe a diferença entre guardar temporariamente e armazenar com segurança?"
        ],
        curiosidade: "Os antigos discos rígidos (HDs) tinham uma agulha física lendo discos metálicos a 7.200 rotações por minuto. O SSD não tem nenhuma peça móvel, por isso não faz barulho e lê dados quase instantaneamente!",
        pergunta: "Qual é a principal função do SSD no computador?",
        alternativas: ["Guardar arquivos e programas permanentemente", "Processar os efeitos 3D dos jogos", "Conectar os periféricos com fio"],
        correta: 0,
        perguntas: [
            {
                pergunta: "Qual é a principal vantagem de um SSD moderno em relação a um HD antigo?",
                alternativas: [
                    "O SSD é muito mais rápido, silencioso e não possui partes mecânicas móveis",
                    "O SSD consome muito mais energia e faz bastante barulho",
                    "O SSD necessita de conexão constante com a internet para guardar fotos"
                ],
                correta: 0
            },
            {
                pergunta: "Onde ficam salvos seus arquivos, vídeos e jogos mesmo quando o computador está totalmente desligado?",
                alternativas: [
                    "Na memória RAM",
                    "No SSD (ou Unidade de Armazenamento)",
                    "No cabo de alimentação de energia"
                ],
                correta: 1
            },
            {
                pergunta: "O que significa a sigla SSD em português/inglês?",
                alternativas: [
                    "Super System Disk (Disco do Sistema)",
                    "Solid State Drive (Unidade de Estado Sólido)",
                    "System Safety Data (Dados de Segurança)"
                ],
                correta: 1
            }
        ]
    },

    gpu: {
        nome: "GPU (Placa de Vídeo)",
        imagem: "../img/personagens/gpu.png",
        dialogos: [
            "Ei, entusiasta digital! Eu sou a GPU, a Unidade de Processamento Gráfico.",
            "Minha paixão é transformar números e códigos em imagens incríveis, cores vibrantes e gráficos 3D espetaculares!",
            "Enquanto a CPU lida com cálculos gerais, eu sou especialista em calcular milhões de pixels na tela por segundo.",
            "Se você adora jogar com altas taxas de quadros (FPS), assistir vídeos em 4K ou editar animações, eu sou sua melhor amiga!",
            "Possuo milhares de pequenos núcleos que trabalham todos juntos ao mesmo tempo para desenhar cenários realistas.",
            "Hora de testar se os seus olhos captaram o papel da Placa de Vídeo!"
        ],
        curiosidade: "A GPU lida com matemática vetorial e matricial massiva. Por causa disso, além de jogos 3D, as GPUs hoje são usadas para treinar inteligências artificiais avançadas e processar supercomputadores!",
        pergunta: "Qual componente é responsável pela criação e renderização de imagens e gráficos 3D?",
        alternativas: ["GPU (Placa de Vídeo)", "Mouse", "Placa de Som"],
        correta: 0,
        perguntas: [
            {
                pergunta: "Qual componente é especializado em processar gráficos 3D, jogos e renderização de vídeos?",
                alternativas: [
                    "GPU (Placa de Vídeo)",
                    "Fonte de Alimentação",
                    "Teclado e Mouse"
                ],
                correta: 0
            },
            {
                pergunta: "O que significa a sigla FPS em jogos e vídeos?",
                alternativas: [
                    "Fotos Por Segundo",
                    "Frames Per Second (Quadros Por Segundo)",
                    "Frequência Principal do Sistema"
                ],
                correta: 1
            },
            {
                pergunta: "Como a GPU consegue calcular cenários virtuais 3D tão rapidamente?",
                alternativas: [
                    "Usando milhares de pequenos núcleos especializados em processar pixels em paralelo",
                    "Baixando as imagens prontas da internet toda vez que você se move no jogo",
                    "Desligando o processador (CPU) enquanto o jogo é executado"
                ],
                correta: 0
            }
        ]
    },

    placamae: {
        nome: "Placa-mãe",
        imagem: "../img/personagens/placamae.png",
        dialogos: [
            "Olá! Eu sou a Placa-mãe, o coração estrutural do computador.",
            "Sou a grande placa de circuito impresso onde todos os outros componentes são encaixados e conectados.",
            "CPU, RAM, SSD, GPU e fonte de energia... todos dependem de mim para se comunicarem entre si!",
            "Possuo 'barramentos', que são verdadeiras estradas eletrônicas por onde trafegam os dados do sistema.",
            "Também possuo a BIOS/UEFI, um pequeno chip com as instruções iniciais para ligar o computador.",
            "Pronto para mostrar que você aprendeu quem une todas as peças dessa máquina?"
        ],
        curiosidade: "Na superfície da placa-mãe existem linhas de cobre super finas chamadas 'trilhas' ou 'barramentos'. Elas transportam sinais elétricos com dados entre o processador e as memórias a velocidades altíssimas!",
        pergunta: "Qual peça é responsável por conectar e permitir a comunicação entre todos os componentes?",
        alternativas: ["Placa-mãe", "Gabinete de metal", "Caixa de som externa"],
        correta: 0,
        perguntas: [
            {
                pergunta: "Qual é o papel fundamental da Placa-mãe no computador?",
                alternativas: [
                    "Apenas segurar os botões do gabinete sem conduzir energia",
                    "Interconectar e permitir a comunicação elétrica e de dados entre todos os componentes",
                    "Imprimir documentos em papel automaticamente"
                ],
                correta: 1
            },
            {
                pergunta: "Como são chamadas as trilhas eletrônicas na placa-mãe pelas quais as informações viajam?",
                alternativas: [
                    "Trilhos de trem elétrico",
                    "Barramentos (Buses)",
                    "Fios de internet sem fio"
                ],
                correta: 1
            },
            {
                pergunta: "O que é encaixado nos chamados 'slots de expansão' (como os slots PCIe) da Placa-mãe?",
                alternativas: [
                    "Placas de vídeo (GPU), placas de rede e outros componentes de expansão",
                    "Apenas os cabos da impressora",
                    "Folhas de papel para salvar documentos"
                ],
                correta: 0
            }
        ]
    },

    firewall: {
        nome: "Firewall",
        imagem: "../img/personagens/firewall.png",
        dialogos: [
            "Atenção, Agente! Eu sou o Firewall, o escudo e guardião da sua rede.",
            "Minha missão principal é inspecionar todo o tráfego de dados que tenta entrar ou sair do seu computador.",
            "Analiso pacotes de informação, verifico regras de segurança e bloqueio conexões maliciosas ou não autorizadas.",
            "Trabalho dia e noite impedindo que invasores, hackers e scripts maldosos tenham acesso aos seus dados pessoais.",
            "Sou a primeira linha de defesa antes que ameaças cheguem ao seu sistema operacinal.",
            "Vamos verificar se você entendeu como manter as portas da sua máquina seguras!"
        ],
        curiosidade: "O nome 'Firewall' (Parede de Fogo) veio da arquitetura civil: paredes reforçadas construídas em edifícios para impedir que incêndios se espalhassem de uma sala para outra!",
        pergunta: "Qual é a função do Firewall no computador?",
        alternativas: ["Filtrar o tráfego de dados e bloquear acessos não autorizados", "Aumentar a velocidade dos jogos online", "Formatar a memória RAM"],
        correta: 0,
        perguntas: [
            {
                pergunta: "O que o Firewall faz quando detecta uma tentativa de conexão de rede suspeita ou não autorizada?",
                alternativas: [
                    "Permite a conexão sem avisar o usuário",
                    "Bloqueia a conexão para proteger o sistema contra invasões",
                    "Desliga a luz do quarto imediatamente"
                ],
                correta: 1
            },
            {
                pergunta: "Contra qual tipo de ameaça o Firewall nos protege principalmente?",
                alternativas: [
                    "Ataques de rede, intrusos digitais e conexões perigosas vindas da internet",
                    "Quedas físicas do computador da mesa",
                    "Manchas de sujeira na tela do monitor"
                ],
                correta: 0
            },
            {
                pergunta: "Podemos comparar o trabalho do Firewall a:",
                alternativas: [
                    "Um leitor de livros virtuais",
                    "Um porteiro ou guarda de segurança inspecionando quem pode entrar e sair do prédio",
                    "Um teclado musical"
                ],
                correta: 1
            }
        ]
    },

    internet: {
        nome: "Internet",
        imagem: "../img/personagens/internet.png",
        dialogos: [
            "Olá! Eu sou a Internet, a gigante rede global de computadores interconectados.",
            "Comigo, distâncias não existem! Conecto seu dispositivo a servidores e pessoas espalhados por todo o planeta.",
            "Permito que você acesse websites, assista a streamings, envie mensagens instantâneas e jogue online em equipe.",
            "Utilizo protocolos padronizados (como o TCP/IP) e endereços IP únicos para que cada mensagem chegue ao destino correto.",
            "Muitos acham que funciono apenas no ar, mas a maior parte do meu tráfego viaja por imensos cabos submarinos!",
            "Está pronto para testar o que sabe sobre a grande teia mundial de computadores?"
        ],
        curiosidade: "Cerca de 99% do tráfego internacional da internet é transmitido por centenas de cabos de fibra óptica submarinos instalados nos oceanos do planeta, capazes de transmitir terabits de dados por segundo!",
        pergunta: "O que a Internet permite fazer no computador?",
        alternativas: ["Conectar computadores no mundo todo para trocar dados e informações", "Trocar a cor física do gabinete do computador", "Substituir a necessidade de energia elétrica"],
        correta: 0,
        perguntas: [
            {
                pergunta: "O que permite que computadores em continentes diferentes troquem informações em frações de segundo?",
                alternativas: [
                    "A rede mundial de computadores (Internet) através de cabos de fibra óptica e roteadores",
                    "O leitor de discos de CD/DVD local",
                    "O cabo do teclado"
                ],
                correta: 0
            },
            {
                pergunta: "Qual identificador numérico único cada dispositivo conectado à internet recebe para ser localizado?",
                alternativas: [
                    "Endereço de e-mail",
                    "Endereço IP (Internet Protocol)",
                    "Código de barras do produto"
                ],
                correta: 1
            },
            {
                pergunta: "O que é um 'Servidor' na internet?",
                alternativas: [
                    "Um computador potente que armazena dados, sites e serviços para fornecer a outros clientes",
                    "Um aplicativo de edição de imagem",
                    "Um tipo de cabo de impressora"
                ],
                correta: 0
            }
        ]
    },

    arquivos: {
        nome: "Arquivos de Dados",
        imagem: "../img/personagens/arquivos.png",
        dialogos: [
            "Oi, Agente! Eu sou o Arquivo de Dados.",
            "Represento todas as suas fotos de férias, documentos importantes, músicas favoritas e executáveis de programas.",
            "Organizo as informações em pastas (diretórios) e utilizo extensões para identificar o meu tipo de conteúdo.",
            "Por exemplo: `.png` ou `.jpg` para fotos, `.mp3` para áudio, `.mp4` para vídeos e `.pdf` ou `.docx` para textos.",
            "No nível mais profundo da máquina, eu sou guardado como uma sequência ordenada de código binário (zeros e umes).",
            "Será que você sabe identificar corretamente os tipos de arquivos e sua organização?"
        ],
        curiosidade: "Todas as fotos, músicas e documentos no computador são, na verdade, gigantescas sequências de bits (0s e 1s). O computador sabe se o arquivo é imagem ou som lendo a extensão do arquivo e o seu cabeçalho digital!",
        pergunta: "Como as informações são organizadas no sistema operacional?",
        alternativas: ["Em arquivos com formatos específicos agrupados em pastas/diretórios", "Espalhadas sem qualquer formato na tela", "Gravadas apenas nas lâmpadas da sala"],
        correta: 0,
        perguntas: [
            {
                pergunta: "Em qual linguagem básica os computadores armazenam e leem internamente o conteúdo de qualquer arquivo?",
                alternativas: [
                    "Código Binário (sequências de 0s e 1s)",
                    "Letras desenhadas em metal",
                    "Código Morse acústico"
                ],
                correta: 0
            },
            {
                pergunta: "Qual extensão de arquivo abaixo é usada para armazenar fotos e imagens digitais?",
                alternativas: [
                    ".mp3",
                    ".jpg ou .png",
                    ".exe"
                ],
                correta: 1
            },
            {
                pergunta: "Qual é a utilidade das pastas (diretórios) em um sistema operacional?",
                alternativas: [
                    "Organizar e estruturar os arquivos para facilitar a localização das informações",
                    "Excluir dados antigos automaticamente",
                    "Aumentar o brilho e contraste da tela do computador"
                ],
                correta: 0
            }
        ]
    },

    virus: {
        nome: "Vírus Misterioso",
        imagem: "../img/personagens/virus.png",
        dialogos: [
            "MWAHAHAHA! Finalmente o Agente Digital criou coragem para me encarar!",
            "Eu sou o Vírus Misterioso, uma ameaça maliciosa pronta para corromper dados e causar o caos!",
            "Você acha que aprendeu bastante conversando com os componentes do sistema?",
            "Para me derrotar e salvar o computador de vez, você terá que responder corretamente a todas as minhas perguntas de teste final!",
            "Se você falhar, eu vou infectar o sistema inteiro! Mostre do que você é capaz se tiver coragem!"
        ],
        curiosidade: "Vírus de computador são softwares maliciosos (malware) criados para infectar arquivos, roubar senhas ou danificar sistemas. A melhor proteção é manter antivírus atualizados e não clicar em links suspeitos!",
        perguntasChefe: [
            {
                pergunta: "1/5: Qual componente é conhecido como o cérebro do computador e executa todos os cálculos?",
                alternativas: [
                    "CPU (Processador)",
                    "SSD",
                    "Monitor"
                ],
                correta: 0
            },
            {
                pergunta: "2/5: Qual memória guarda dados temporários de programas abertos e é apagada ao desligar?",
                alternativas: [
                    "Memória RAM",
                    "SSD",
                    "Placa-mãe"
                ],
                correta: 0
            },
            {
                pergunta: "3/5: Qual componente é o responsável especialista em renderizar gráficos 3D e jogos?",
                alternativas: [
                    "GPU (Placa de Vídeo)",
                    "Firewall",
                    "Arquivos"
                ],
                correta: 0
            },
            {
                pergunta: "4/5: Qual peça central interconecta eletricamente todos os componentes do computador?",
                alternativas: [
                    "Placa-mãe",
                    "Internet",
                    "Cooler"
                ],
                correta: 0
            },
            {
                pergunta: "5/5: Qual sistema de segurança inspeciona o tráfego da rede para bloquear conexões maliciosas?",
                alternativas: [
                    "Firewall",
                    "SSD",
                    "Memória RAM"
                ],
                correta: 0
            }
        ],
        chefe: true
    }
};
