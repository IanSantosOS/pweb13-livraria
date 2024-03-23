const UserModel = require('../models/usersModel');

const formCadastroUserValidacao = async ({ body }, res, next) => {
  const messageError = {};

  if (!body?.username?.trim()) {
    messageError.username = 'Nome de usuário é obrigatório e não pode ser vazio';
  }
  else if (await UserModel.usernameJaExistente(body.username)) {
    messageError.username = 'Nome de usuário já existe';
  }
  else if (body.username.trim().replace(/ +/g, '') !== body.username) {
    messageError.username = 'Nome de usuário não deve conter espaços';
  }
  else if (body.username.includes('@') || body.username.includes('?') || body.username.includes('!')) {
    messageError.username = 'Nome de usuário não deve conter @, ? ou !';
  }
  else if (body.username !== body.username.normalize("NFD").replace(/[\u0300-\u036f]/g, '')) {
    messageError.username = 'Nome de usuário não deve conter pontuação (á, ã, ü, etc)';
  }

  if (!body?.password?.trim()) {
    messageError.password = 'Senha é obrigatória e não pode ser vazia';
  }
  else if (body.password.length < 4) {
    messageError.password = 'A senha tem que ter no mínimo 4 dígitos.';
  }

  if (!body?.password_confirm?.trim()) {
    messageError.password_confirm = 'Confirmação de senha é obrigatória e não pode ser vazia';
  }
  else if (body.password !== body.password_confirm) {
    messageError.password_confirm = 'As senhas não coincidem (não são as mesmas)';
  }

  if (Object.values(messageError).length !== 0) {
    return res.status(400).json({ messageError });
  }

  next();
};

module.exports = formCadastroUserValidacao;