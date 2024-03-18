class Usuario {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  static _contas = [];

  static usernameJaExistente(username) {
    return Usuario._contas.find(user => user.username.toLowerCase() === username.toLowerCase());
  }

  static cadastrarUsuario(novoUsuario) {
    Usuario._contas.push(novoUsuario);
  }

  static verificarUsuarioESenha(username, password) {
    return Usuario._contas.find(conta => {
      return conta.password === password && conta.username.toLowerCase() === username.toLowerCase();
    });
  }
}

const users = require('../utils/users.json');

users.forEach(user => {
  const novoUsuario = new Usuario(user.username, user.password);
  Usuario.cadastrarUsuario(novoUsuario);
});

module.exports = Usuario;