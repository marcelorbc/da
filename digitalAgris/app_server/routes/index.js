var express = require('express');
var router = express.Router();

var contactsController = require('../controllers/contatos')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('/fazenda/index', { title: 'Express' });
});

/* Contatos view */
router.get('/contatos', contactsController.listar );
router.get('/contatos/incluir', contactsController.incluir );

module.exports = router;
