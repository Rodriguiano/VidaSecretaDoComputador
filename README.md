[README.md](https://github.com/user-attachments/files/30374969/README.md)
# 🖥️ Vida Secreta do Computador

> Um jogo web educativo e interativo sobre a arquitetura interna dos computadores e conceitos de tecnologia da informação.

---

## 📌 Sobre o Projeto

**Vida Secreta do Computador** é uma plataforma educacional gamificada projetada para ensinar crianças, jovens e iniciantes sobre o funcionamento interno de um computador. Através de uma narrativa envolvente e personagens cativantes que personificam os componentes de hardware e software, o jogador explora o sistema, aprende curiosidades, realiza missões interativas, acumula pontos de experiência (XP) e enfrenta o temível **Vírus Misterioso** na batalha final para salvar o computador.

Ao concluir a jornada, o jogador é condecorado com o certificado de **Guardião do Computador**.

---

## 🚀 Funcionalidades Principais

- 🎮 **Gamificação & Sistema de XP**: Acompanhamento de progresso com barra de XP, missões concluídas e salvamento automático (`localStorage`).
- 🤖 **Personagens Interativos**: Diálogos explicativos com CPU, RAM, SSD, GPU, Placa-mãe, Firewall, Internet e Arquivos.
- 💡 **Curiosidades Educativas**: Fatos interessantes sobre cada componente antes do desafio.
- 🎯 **Quizzes de Fixação**: Perguntas e respostas interativas com feedback visual e sonoro imediato.
- 👾 **Batalha Final contra o Vírus**: Desafio de chefão com 5 perguntas abrangentes para testar o aprendizado total.
- 🏆 **Certificado Digital de Conclusão**: Tela final de recompensa para os agentes digitais vitoriosos.
- 🔊 **Sistema de Áudio Imersivo (Web Audio API)**:
  - Música de fundo ambiente (BGM).
  - Efeitos sonoros táticos (clique, avanço de diálogo, acerto, erro, alarme do vírus e fanfarra de vitória).
  - Botão flutuante de controle de som (`🔊 Som ON` / `🔇 Som OFF`).
- 🎨 **Interface Moderna & Responsiva**: Design escuro em estilo *cyberpunk/neon*, fundo com gradiente dinâmico e partículas flutuantes.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica das telas.
- **CSS3**: Estilização moderna com *glassmorphism*, gradientes, efeitos neon, flexbox/grid e animações nativas.
- **JavaScript (ES6+)**: Lógica de jogo, controle de progresso, gerenciamento de estado e manipulação do DOM.
- **Web Audio API**: Geração de som sintetizado de alta qualidade sem dependência de arquivos externos de áudio.
- **LocalStorage**: Persistência do progresso do jogador e preferências de som.

---

## 📁 Estrutura de Arquivos

```text
VidaSecretaDoComputador/
├── index.html            # Tela inicial e introdução
├── README.md             # Documentação do projeto
├── LICENSE               # Licença do repositório
├── css/                  # Folhas de estilo modularizadas
│   ├── style.css         # Importador central de estilos
│   ├── layout.css        # Estrutura base
│   ├── botoes.css        # Botões e controle de áudio
│   ├── cards.css         # Cards dos personagens
│   ├── animacoes.css     # Partículas e transições
│   └── ...
├── js/                   # Lógica e scripts do jogo
│   ├── som.js            # Motor de áudio Web Audio API
│   ├── util.js           # Utilitários de navegação
│   ├── progresso.js      # Gestão de XP e desbloqueio
│   ├── inicio.js         # Controle da tela inicial
│   ├── mapa.js           # Mapa e seleção de missões
│   ├── personagens.js    # Banco de dados de diálogos e quizzes
│   ├── dialogos.js       # Sistema de conversa
│   ├── quiz.js           # Validação de respostas do quiz
│   ├── virus.js          # Lógica da batalha final
│   └── certificado.js    # Tela de certificado
├── pages/                # Páginas internas
│   ├── mapa.html         # Visão geral do mapa do computador
│   ├── personagem.html   # Tela de diálogo e quiz
│   └── certificado.html  # Tela de vitória e certificado
└── img/                  # Logos e ilustrações dos personagens
```

---

## 💻 Como Executar o Projeto

1. Clone ou baixe este repositório para o seu computador.
2. Abra o arquivo `index.html` em qualquer navegador web moderno (Google Chrome, Firefox, Edge, Safari).
3. Clique em **🚀 Iniciar Missão** e divirta-se aprendendo!

---

## 📜 Licença

Este projeto foi desenvolvido para fins educacionais. Livre para uso, estudo e modificação conforme a licença inclusa.
