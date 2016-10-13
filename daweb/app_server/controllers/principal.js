module.exports.home = function(req, res, next) {
  res.render('contatos/listar', { });
}
module.exports.incluir = function(req, res, next) {
  res.render('contatos/incluir', { });
}
module.exports.criarConta = function(req, res, next) {
  res.render('conta/criar', { });
}