const db = require('./dbConnection');

class Usuario {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  async cadastrarUsuario() {
    return await db.execute('INSERT INTO usuarios VALUES (?, ?)', [this.username, this.password]);
  }

  static async usernameJaExistente(queryUsername) {
    const [ rows ] = await db.execute('SELECT username FROM usuarios WHERE LOWER(username) = LOWER(?)', [queryUsername]);
    if (rows.length > 0) return true;
    return false;
  }

  static async verificarUsuarioESenha(username, password) {
    const [ rows ] = await db.execute('SELECT username FROM usuarios WHERE LOWER(username) = LOWER(?) AND password = ?', [username, password]);
    return rows[0];
  }
}

module.exports = Usuario;