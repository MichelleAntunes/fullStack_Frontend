export const getMessageErrorToastLogin = (message) => {
  switch (message) {
    case "email: Invalid email":
      return "'Email' ou 'Senha' incorretos. Tente novamente.";

    case "password: String must contain at least 8 character(s)":
      return "'Email' ou 'Senha' incorretos. Tente novamente.";

    case "'Email' ou 'Password' incorretos. Tente novamente.":
      return "'Email' ou 'Senha' incorretos. Tente novamente.";

    default:
      return "Erro inesperado. Tente novamente.";
  }
};

export const getMessageErrorToastSignup = (message) => {
  switch (message) {
    case "username: String must contain at least 2 character(s)":
      return "Username inválido, deve possuir pelo menos 2 caracteres.";

    case "email: Invalid email":
      return "Email inválido. Verifique e tente novamente.";

    case "password: String must contain at least 8 character(s)":
      return "Senha inválida. A senha deve possuir entre 8 e 12 caracteres, com letras maiúsculas e minúsculas e no mínimo um número e um caractere especial.";

    case "password: A senha deve possuir entre 8 e 12 caracteres, com letras maiúsculas e minúsculas e no mínimo um número e um caractere especial.":
      return "Senha inválida. A senha deve possuir entre 8 e 12 caracteres, com letras maiúsculas e minúsculas e no mínimo um número e um caractere especial.";

    case "Não é possível criar mais de uma conta com o mesmo username. Tente novamente.":
      return "Username em uso! Não é possível criar mais de uma conta com o mesmo username. Tente novamente.";

    case "Não é possível criar mais de uma conta com o mesmo e-mail. Tente novamente.":
      return "Não é possível criar mais de uma conta com o mesmo e-mail. Tente novamente.";

    default:
      return "Erro inesperado. Tente novamente.";
  }
}

export const getMessageErrorToastCreatePostOrComment = (message) => {
    switch (message) {
      case "content: String must contain at least 1 character(s)":
        return "É preciso digitar algo antes de postar!";
  
      case "Token inválido.":
        return "Erro inesperado. Verifique se está logado(a) corretamente e tente novamente.";
  
      case "token: String must contain at least 1 character(s)":
        return "Sessão expirada. Atualize a página e refaça o login para continuar.";

      case "postId: String must contain at least 1 character(s)":
        return "Erro inesperado. Atualize a página e tente novamente.";

      case "Post não encontrado. Verifique o id e tente novamente.":
        return "Post não encontrado. Verifique se o post ainda existe e tente novamente.";
  
      default:
        return "Erro inesperado. Tente novamente.";
  }
};

export const getMessageErrorToastLikeDislike = (message) => {
  switch (message) {
    case "Não é possível interagir com seu próprio post.":
      return "Não é possível interagir com seu próprio post.";

    case "Não é possível interagir com seu próprio comentário.":
      return "Não é possível interagir com seu próprio comentário."

    case "Token inválido.":
      return "Erro inesperado. Verifique se está logado(a) corretamente e tente novamente.";

    case "token: String must contain at least 1 character(s)":
      return "Sessão expirada. Atualize a página e refaça o login para continuar.";

    case "postId: String must contain at least 1 character(s)":
      return "Erro inesperado. Atualize a página e tente novamente.";

    case "Post não encontrado. Verifique o id e tente novamente.":
      return "Post não encontrado. Verifique se o post ainda existe e tente novamente.";

    case "commentId: String must contain at least 1 character(s)":
      return "Erro inesperado. Atualize a página e tente novamente.";

    case "Comentário não encontrado. Verifique o id e tente novamente.":
      return "Post não encontrado. Verifique se o comentário ainda existe e tente novamente.";

    default:
      return "Erro inesperado. Tente novamente.";
}
};
