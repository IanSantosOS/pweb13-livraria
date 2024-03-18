const { usernameJaExistente } = require('../controllers/usersController');

const formCadastroUserValidacao = ({ body }, res, next) => {
  const message = {};

  if (!body?.username?.trim()) {
    message.username = 'Nome de usuário é obrigatório e não pode ser vazio';
  }
  else if (validarUsername(body.username)) {
    message.username = validarUsername(body.username);
  }

  if (!body?.pass?.trim()) {
    message.pass = 'Senha é obrigatória e não pode ser vazia';
  }
  else if (validarPassword(body.pass)) {
    message.pass = validarPassword(body.pass);
  }

  if (!body?.pass_confirm?.trim()) {
    message.pass_confirm = 'Confirmação de senha é obrigatória e não pode ser vazia';
  }
  else if (body.pass !== body.pass_confirm) {
    message.pass_confirm = 'As senhas não coincidem (não são as mesmas)';
  }

  if (Object.values(message).length !== 0) {
    return res.status(400).json({ message });
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