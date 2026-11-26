# Mundo RPG

[Português](#-português) | [English](#-english)

---

## 🇧🇷 Português

Landing page e página de contato para uma plataforma fictícia de recursos para mesas de RPG (mapas, itens, criaturas e planos), desenvolvida com foco em responsividade *mobile-first* e adaptação para tablet e desktop.

### Funcionalidades

- **Barra de navegação fixa (`.cabecalho`)**: acompanha a rolagem da página, com menu responsivo (gaveta mobile) e links com rolagem suave ajustada para cada seção.
- **Busca por tema**: campo de pesquisa no banner que direciona para categorias de mapas, itens, criaturas, planos ou FAQ.
- **Acervo de Mapas (`#mapas`)**:
  - Seleção por categorias (**Batalhas**, **Mundiais**, **Cidades**, **Regiões** e **Cavernas**).
  - Pré-visualização ampliada sincronizada com carrossel infinito via **Swiper 11** (miniaturas clicáveis e setas que avançam/retrocedem a imagem principal).
- **Itens e Criaturas (`#itens`)**:
  - Alternância entre os catálogos de **Itens** e **Criaturas** com slider interativo.
- **Depoimentos, FAQ e Planos**:
  - Acordeão de perguntas frequentes (ao abrir uma pergunta, a anterior é fechada mantendo o fundo estável).
  - Alternador de planos **Mensal / Anual** com atualização dinâmica de preço e texto promocional.
- **Modal de Login**:
  - Acesso pelo ícone de usuário na barra superior (desktop) ou opção **LOGIN** no menu mobile, com campos de *Nickname*, *Senha* (com botão Mostrar/Ocultar) e opção de salvar dados.
- **Página de Contato (`contato.html`)**:
  - Formulário com validação, máscara de telefone `(00) 9-0000-0000`, contador de caracteres da mensagem e feedback visual de envio.

### Estrutura do Projeto

```text
Mobile_1/
├── index.html
├── contato.html
├── README.md
├── styles/
│   ├── reset.css
│   ├── style.css
│   ├── Home/
│   │   ├── headers.css
│   │   ├── banner.css
│   │   ├── colecao1.css
│   │   ├── colecao2.css
│   │   ├── final.css
│   │   └── footer.css
│   └── Usuario/
│       └── contato.css
├── js/
│   ├── navigation.js
│   ├── login.js
│   ├── script_swiper.js
│   ├── faq.js
│   ├── mes_ano.js
│   └── contato/
│       ├── contato.js
│       ├── contato_tel.js
│       └── mensagens.js
└── imagens2/
    ├── Mapas/
    ├── Itens.criaturas/
    ├── fantasy/
    └── *.svg
```

### Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd Mobile_1
   ```
2. Inicie um servidor HTTP estático na raiz do projeto (exemplo com Python):
   ```bash
   python -m http.server 8123
   ```
3. Acesse `http://localhost:8123` no navegador.

### Tecnologias Utilizadas

- **HTML5**
- **CSS3** (Flexbox, Grid, variáveis CSS e Media Queries)
- **JavaScript (ES6+)**
- **Swiper 11** (carrossel de mapas)

### Histórico de Correções Notáveis

- **Loop do carrossel de mapas**: resolvido o bug de espaço fantasma após o último slide causado pela recriação manual dos slides sem reinicializar a instância do Swiper e por regras de largura fixa conflitantes em `.swiper-slide`.
- **Formulário de contato**: corrigida a referência inexistente ao campo `#assunto` que interrompia o envio e ajustada a máscara de telefone para permitir apagar dígitos normalmente.
- **CSS e responsividade**: corrigidos imports quebrados/duplicados, gradientes inválidos, remoção de `outline` de debug e adaptação completa dos blocos para mobile, tablet e desktop.

---

## 🇺🇸 English

Landing page and contact page for a fictional tabletop RPG assets platform (maps, items, creatures, and plans), built with a mobile-first responsive layout adapted for tablet and desktop screens.

### Features

- **Sticky top navigation bar (`.cabecalho`)**: stays visible on scroll, featuring a responsive mobile drawer menu and section-aligned smooth scrolling.
- **Theme search bar**: hero search input that jumps directly to matching map categories, items, creatures, plans, or FAQ.
- **Map Collection (`#mapas`)**:
  - Category switching (**Batalhas**, **Mundiais**, **Cidades**, **Regiões**, and **Cavernas**).
  - Large preview image synchronized with an infinite **Swiper 11** carousel (clickable thumbnails and prev/next arrows that step through the main preview).
- **Items & Creatures (`#itens`)**:
  - Interactive tab switcher between **Itens** and **Criaturas** with an image slider.
- **Testimonials, FAQ & Pricing**:
  - Single-open FAQ accordion (opening one item closes the previous one while keeping the background fixed).
  - **Mensal / Anual** billing toggle updating pricing and promotional copy dynamically.
- **Login Modal**:
  - Opened from the top-right user icon (desktop) or the **LOGIN** option in the mobile menu, including *Nickname*, *Password* (with Show/Hide toggle), and *Save login* checkbox.
- **Contact Page (`contato.html`)**:
  - Form validation, Brazilian phone input mask `(00) 9-0000-0000`, live message character counter, and inline submission feedback.

### Project Structure

See the [project structure tree](#estrutura-do-projeto) above.

### Running Locally

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Mobile_1
   ```
2. Start a static HTTP server from the project root (e.g. with Python):
   ```bash
   python -m http.server 8123
   ```
3. Open `http://localhost:8123` in your browser.

### Tech Stack

- **HTML5**
- **CSS3** (Flexbox, Grid, CSS Custom Properties, Media Queries)
- **JavaScript (ES6+)**
- **Swiper 11** (map carousel)

### Notable Fixes

- **Map carousel loop**: fixed the phantom blank space after the last slide caused by replacing slides in the DOM without recreating the Swiper instance and by conflicting fixed-width rules on `.swiper-slide`.
- **Contact form**: fixed the missing `#assunto` element reference that broke form submission and fixed the phone mask backspace trap.
- **CSS & responsiveness**: fixed broken/duplicate imports, invalid CSS gradients, removed debug outlines, and added responsive layouts across mobile, tablet, and desktop breakpoints.
