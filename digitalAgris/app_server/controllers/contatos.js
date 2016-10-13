var mongoose = require('mongoose')

module.exports.listar = function(req, res, next) {
  res.render('contatos/listar', { });
}
module.exports.incluir = function(req, res, next) {
  res.render('contatos/incluir', { });
}