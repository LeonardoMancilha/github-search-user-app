# GitHub Search User App

Este projeto é uma aplicação web desenvolvida inicialmente como parte de um desafio do Frontend Mentor. O objetivo era criar uma interface simples para buscar e visualizar informações sobre perfis de usuários do GitHub. Durante o desenvolvimento, fiz algumas alterações e adições de funcionalidades, como a implementação de um tema escuro e claro, animações e atalhos de teclado, para melhorar a experiência do usuário.

Agora, você pode pesquisar facilmente um usuário no GitHub e acessar informações como repositórios, seguidores e atividades recentes diretamente na interface do aplicativo.



## Funcionalidades Principais

- Pesquisa de Perfil GitHub: Pesquise por um usuário no GitHub e visualize informações detalhadas, como repositórios, seguidores e atividades.
- Tema Escuro e Claro: Altere entre os temas de forma intuitiva com um clique ou usando os atalhos de teclado D para o tema escuro e L para o tema claro.
- Exibição de informações: Veja o nome do usuário, número de repositórios públicos, seguidores, pull requests criados e muito mais.
  
- Atalhos de teclado: Navegue de forma rápida com atalhos:
    - P: Inicia a busca com o termo de pesquisa.
    - A: Abre o perfil do usuário no GitHub em uma nova aba.
  
- Responsividade: Interface adaptável para dispositivos móveis e desktops, garantindo uma boa experiência em diferentes tamanhos de tela.
- Feedback de Carregamento: Exibe uma mensagem de "Carregando..." enquanto busca as informações do perfil do GitHub.
- Animação Suave: Transições suaves entre os temas claro e escuro, proporcionando uma experiência mais agradável ao usuário.

# Desafio Original

Este projeto foi inspirado em um desafio do <a href="https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6" target="_blank">Frontend Mentor</a>, onde o objetivo era criar uma aplicação para exibir detalhes de um perfil de usuário do GitHub. No entanto, decidi ir além e adicionar recursos como:

- Alternância de temas (escuro/claro) com animações;
- Implementação de atalhos de teclado para facilitar a navegação;
- Exibição de um feedback de carregamento enquanto as informações são recuperadas.

# Tecnologias Usadas

- React: Para a construção da interface de usuário.
- React Hooks: Para gerenciamento de estado e efeitos colaterais.
- CSS Puro: Para estilização da aplicação.
- GitHub API: Para buscar as informações do usuário do GitHub.
- React Router: Para navegação de rotas (caso haja múltiplas páginas).

# Como Rodar o Projeto

## 1. Clone o Repositório
```bash
git clone https://github.com/LeonardoMancilha/github-user-profile-search.git
cd github-user-profile-search
```

## 2. Instale as Dependências
```bash
npm install
```

## 3. Rode o Projeto
```bash
npm start
```
Isso irá rodar o projeto localmente em http://localhost:3000.

# Como Contribuir
1. Fork este repositório.
2. Crie uma branch para sua feature (git checkout -b feature/nova-feature).
3. Faça suas alterações.
4. Commit suas alterações (git commit -am 'Adiciona nova funcionalidade').
5. Push para a branch (git push origin feature/nova-feature).
6. Abra um Pull Request.

# Licença
Este projeto está licenciado sob a Licença MIT.

# Agradecimentos
Agradecemos ao GitHub pela API que torna possível a busca por perfis de usuários de forma simples e eficiente.

