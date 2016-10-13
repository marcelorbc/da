var CRUDController =  require('./CRUDController');


/**
 * @api {get} /livros/:id Buscar informações de livros
 * @apiName Consultar Por ID  
 * @apiGroup Livros
 * @apiParam {Number} identificador do Contato
 * @apiSuccess {String} Json com os dados do Contato.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "titulo": "Meu primeiro Livro",
 *       "autor": "Marcelo Bueno"
 *     }
 * @apiError Livro não encontrado o <code>id</code> do livro não foi encontrado
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "LivroNãoEncontrado"
 *     }
 */

 /**
 * @api {post} /livros Criar novo livro
 * @apiName Criar novo
 * @apiGroup Livros
 * @apiParamExample JSON deve ser enviado no corpo da chamada:
 *
 *	{
 *		titulo:"Meu primeiro livro",
 *		autor:"Marcelo Bueno"
 *
 *	}
 *
 * @apiSuccess {String} Json com os dados do Contato.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError Livro não encontrado o <code>id</code> do livro não foi encontrado
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "LivroNãoEncontrado"
 *     }
 */

module.exports.create =  function(){
	return CRUDController.create('Livros', '../models/livros')
}