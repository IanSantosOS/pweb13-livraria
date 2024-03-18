const { usernameJaExistente } = require('../models/usersModel');

const formCadastroUserValidacao = ({ body }, res, next) => {
  const messageError = {};

  if (!body?.username?.trim()) {
    messageError.username = 'Nome de usuário é obrigatório e não pode ser vazio';
  }
  else if (validarUsername(body.username)) {
    messageError.username = validarUsername(body.username);
  }

  if (!body?.password?.trim()) {
    messageError.password = 'Senha é obrigatória e não pode ser vazia';
  }
  else if (validarPassword(body.password)) {
    messageError.password = validarPassword(body.password);
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

const validarUsername = (username) => {
  if (usernameJaExistente(username)) {
    return 'Nome de usuário já existe';
  }

  if (username.trim().replace(/ +/g, '') !== username) {
    return 'Nome de usuário não deve conter espaços';
  }

  if (username.includes('@') || username.includes('?') || username.includes('!')) {
    return 'Nome de usuário não deve conter @, ? ou !';
  }

  if (username !== username.normalize("NFD").replace(/[\u0300-\u036f]/g, '')) {
    return 'Nome de usuário não deve conter pontuação (á, ã, ü, etc)';
  }
};

const validarPassword = (pass) => {
  if (pass.length < 4) {
    return 'A senha tem que ter no mínimo 4 dígitos.';
  }
};

module.exports = formCadastroUserValidacao;