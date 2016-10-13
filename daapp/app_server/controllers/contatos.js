'use strict';

module.exports.listar = function(req, res) {
  res.render('contatos/listar', { });
};
module.exports.incluir = function(req, res) {
  res.render('contatos/incluir', { });
};