var express = require('express');
var router = express.Router();

//Welcome 
router.get('/', function(req, res) {
    res.json({ message: 'Wow ! Seja bem vindo a nossa API' });   
});


// middleware to use for all requests
router.use(function(req, res, next) {
    next(); 
});
//Create a default CRUD API Function
var creatorDefaultCrudApi = function(controllerPath, apiPath, compl){

	var controller = require(controllerPath)
	var instance = controller.create();

	var a = router.route(apiPath)
		.get(instance.listar)
		.post(instance.criar)

	var b = router.route(apiPath + '/:id')
		.get(instance.consultarPorId)
		.put(instance.alterar)
		.delete(instance.excluir);
	
	if(compl) compl(a, b)
}

creatorDefaultCrudApi('../controllers/contatos', '/contatos')
creatorDefaultCrudApi('../controllers/livros', '/livros')
creatorDefaultCrudApi('../controllers/racas', '/racas')

module.exports = router;
