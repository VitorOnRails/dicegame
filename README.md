# 🎲 Dice Game (Rolar os Dados)

## 💻 Sobre o Projeto
Um jogo interativo e dinâmico desenvolvido em React onde o usuário testa sua sorte rolando dados. O projeto foca em gerenciamento de estado, lógica condicional e estilização dinâmica utilizando `styled-components`, oferecendo uma experiência fluida de Single Page Application (SPA).

## ✨ Funcionalidades
* **Mecânica de Jogo em Tempo Real:** Sistema lógico de pontuação onde acertar o palpite soma o valor do dado à pontuação total, e errar penaliza o jogador com a subtração de 2 pontos.
* **Renderização Condicional (SPA):** Transição suave entre a tela de menu inicial e o tabuleiro do jogo sem recarregar a página, controlada diretamente via estado do React (`useState`).
* **Estilização Dinâmica:** Feedback visual imediato ao interagir com a interface. O projeto utiliza a passagem de `props` do React diretamente para o `styled-components` para alterar o visual dos elementos ativos (como os números selecionados).
* **Tratamento de Exceções:** Sistema de alerta integrado que impede o usuário de rolar o dado sem antes escolher um número, guiando a experiência de uso e prevenindo quebras na lógica.
* **Componentização Inteligente:** Código estruturado e modular (DRY - *Don't Repeat Yourself*), separando responsabilidades visuais e lógicas em componentes dedicados como `NumberSelector`, `Dado` e `PontuacaoTotal`.

## 🛠️ Tecnologias Utilizadas
* **[React](https://react.dev/)**
* **[Vite](https://vitejs.dev/)**
* **[Styled-Components](https://styled-components.com/)** (Arquitetura de CSS-in-JS para escopo isolado e manipulação dinâmica de estilos)

## 🚀 Como executar o projeto

### Pré-requisitos
É necessário ter o [Git](https://git-scm.com) e o [Node.js](https://nodejs.org/en/) instalados na sua máquina.

### Passo a Passo

1. Clone este repositório:

```bash
git clone https://github.com/VitorOnRails/dicegame.git
```

2. Acesse a pasta do projeto:

```bash
cd projeto-dicegame
```

3. Instale as dependências:

```
npm install
```

4. Execute a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

5. O aplicativo será aberto no seu navegador padrão no endereço:

http://localhost:5173/