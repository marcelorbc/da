'use strict';

var express = require('express');
var router = express.Router();
var helpers = require("../helper");
var chalk = require('chalk');

//Welcome 
router.get('/', function(req, res) {
    res.json({ message: 'Wow ! Seja bem vindo a nossa API' });   
});


// middleware to use for all requests
router.use(function(req, res, next) {
	next(); 
});

//Create a default CRUD API Function
var creatorDefaultCrudApi = function(controllerPath, compl){

	var controller = require(controllerPath);
	var instance = controller.create();

	var a = router.route(controller.path)
		.get(instance.listar)
		.post(instance.criar);
	
    console.log(chalk.green(`Criando rota ${controller.path} `));

	var b = router.route(controller.path + '/:id')
		.get(instance.consultarPorId)
		.put(instance.alterar)
		.delete(instance.excluir);
	
	console.log(chalk.green(`Criando rota ${controller.path + '/:id'} `));

	if(compl) {compl(a, b);}
};

console.log(chalk.green(`
*****************************************************************************

Digital Agris API v1.0.0.
Inicializando as Rotas da API.
Para acessar a documentação da API acesse o link abaixo : 
http://localhost:port/apidocs

*****************************************************************************
`));



// Walker options
helpers.walk('app_api/controllers', function(filepath){
	var filename = filepath.split('\\');
	creatorDefaultCrudApi('../controllers/' + filename[filename.length-1]);
});

module.exports = router;