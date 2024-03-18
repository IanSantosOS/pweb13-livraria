const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  if (!req.session?.username) return;

  req.session.destroy((err) => {
    if (err) {
      res.status(500).send('Erro ao sair da conta!');
    } else {
      req.clearCookie('username');
      res.redirect('/login');
    }
  });
});

module.exports = router;
