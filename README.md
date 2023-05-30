# Labeddit - Frontend

## Sobre o Projeto

Labeddit é uma rede social fictícia, criada para o projeto FullStack final do bootcamp FullStack Web da Labenu, dividido em 2 repositórios (labeddit-backend e labeddit-frontend).

O front-end é uma aplicação React.Js, criada usando Vite, onde o usuário poderá realizar cadastro, login, visualização de uma lista de posts, visualizar um post específico com uma lista de comentários, interagir com os posts e comentários assim como criar seus próprios posts e comentários. Rotas protegidas com JWT salvos em cookies. Inspirado na rede social Reddit.

## Link de Acesso

[Labeddit-Backend Repositório](https://github.com/MichelleAntunes/fullStackProject.git)

[Link Documentação Back-End](https://documenter.getpostman.com/view/25825355/2s93m8z19F)

[Link Front-End Deploy](https://full-stack-frontend-pi.vercel.app/)



### Instalação

```bash
# Instale todas as dependências
$ npm install

# Execute o projeto
$ npm run dev

# A aplicação será iniciada na porta 5173
```

### Bibliotecas Utilizadas

```
react-router-dom
axios
react-icons
date-fns
jose
react-toastify
cookies
universal-cookie
tailwindcss
postcss
autoprefixer
```

### Tecnologias

- ReactJS
- React Hooks
- React Context
- Axios
- Autenticação e autorização (JWT)
- Cookies
- TailwindCSS

### Funcionalidades

- **Rotas públicas:**
  - É possível realizar cadastro.
  - É possível realizar login.
- **Rotas protegidas por autenticação:**
  - Visualização de uma lista de posts.
    - Com data de quando foram criados.
    - Com usernames de seus criadores.
    - Com número de likes.
    - Com número de comentários.
    - Escolher visualizar em ordem de mais recentes.
    - Escolher visualizar em ordem de mais populares (baseado no número de likes).
  - É possível criar um novo post.
  - É possível dar like ou dislike em qualquer post.
  - Não é possível dar like ou dislike em seu próprio post.
  - Visualização de um post específico com sua lista de comentários (se houver).
    - Comentários com data de quando foram criados.
    - Comentários com usernames de seus criadores.
    - Comentários com número de likes.
  - É possível criar um novo comentário.
  - É possível dar like ou dislike em um comentário.
  - Não é possível dar like ou dislike no seu próprio comentário.
  - É possível fazer logout (sair) da rede social.

### Futuras melhorias

- Ser possível excluir um post.
- Ser possível excluir um comentário.
- Visulizar página com informações do usuário.
- Ser possível excluir sua conta.
- Ser possível editar um post.
- Ser possível editar um comentário.
- Ser possível editar informações de usuário (username, email e senha).

### Status do projeto

- Em processo ⏳

## Contato

Linkedin: www.linkedin.com/in/michelle-antunes-868b24156
<br>
Email: miichelleantunes@outlook.com
