const express = require('express');
const router = express.Router();

const { formLoginValidacao } = require('../middlewares/loginAuth');

router.get('/', (req, res) => {
  if (!req.session?.username) {
    res.status(200).render('login');
  } else {
    res.redirect('/homepage');
  }
});

router.post('/', formLoginValidacao, (req, res) => {
  req.session.username = req.body.username;
  req.cookie('username', req.body.username);
  res.status(204).json();
});

module.exports = router;
