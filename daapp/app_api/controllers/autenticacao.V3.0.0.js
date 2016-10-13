'use strict';

var CRUDController =  require('./CRUDController');

module.exports.create =  function(){
	return CRUDController.create('Contato', '../../app_server/models/contatos');
};