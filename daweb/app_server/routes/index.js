var express = require('express');
var router = express.Router();
var principalController = require('../controllers/principal');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', principalController.home );
router.get('/criarConta', principalController.criarConta );

module.exports = router;
