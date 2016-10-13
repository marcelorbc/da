'use strict';

var CRUDController =  require('../helper/CRUDController');


/**
 * @api {get} /contatos/:id Buscar informações detalhadas de contatos
 * @apiName Consultar Por ID
 * @apiGroup Contatos  Versão 2.0.0
 *
 * @apiParam {Number} identificador do Contato
 *
 * @apiSuccess {String} Json com os dados do Contato.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "nome": "Marcelo Bueno",
 *       "telefones": ["912345678"]
 *     }
 *
 * @apiError Contato não encontrado o <code>id</code> do Contato não foi encontrado
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
module.exports.name = 'Contatos';
module.exports.path = '/V2.0.0/contatos';

module.exports.create =  function(){
	var controller = CRUDController.create('Contato', '../models/contatos');
	controller.consultarPorId = function(req, res, next){
		res.send({"error":"Modulo desabilitado"});
		res.end()
	}
	return controller;
};