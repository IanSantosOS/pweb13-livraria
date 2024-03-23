const UserModel = require('../models/usersModel');

const cadastrarUsuario = ({ body }, res) => {
  const novoUser = new UserModel(body.username, body.password);
  novoUser.cadastrarUsuario();
  return res.status(200).json({ messageSuccess: `O usuário ${body.username} foi cadastrado com sucesso!` })
};

// eu pensei em colocar funções de editar e remover aqui também mas não deu tempo

module.exports = {
  cadastrarUsuario
};