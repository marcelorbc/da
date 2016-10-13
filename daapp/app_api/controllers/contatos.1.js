'use strict';

var CRUDController =  require('../helper/CRUDController');


/**
 * @api {get} /contatos/:id Buscar informações detalhadas de contatos
 * @apiName Consultar Por ID
 * @apiGroup Contatos
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
module.exports.path = '/contatos';

module.exports.create =  function(){
	return CRUDController.create('Contato', '../models/contatos');
};