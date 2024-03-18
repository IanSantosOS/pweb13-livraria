const UsersModel = require('../models/usersModel');

const formLoginValidacao = ({ body }, res, next) => {
  if (!body?.username?.trim() || !body?.password?.trim()) {
    return res.status(400).json({ messageError: 'Insira um usuário e senha' });
  }

  if (!UsersModel.verificarUsuarioESenha(body.username, body.password)) {
    return res.status(404).json({ messageError: 'Usuário não encontrado' });
  }

  next();
};

const verificarUsuarioLogado = (req, res, next) => {
  if (req.session?.username) {
    next();
  } else {
    res.redirect('/login');
  }
}

module.exports = {
  formLoginValidacao,
  verificarUsuarioLogado
};