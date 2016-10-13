'use strict';

var name = "Livros";
var modelPath = '../models/' + name.toLowerCase();
var CRUDController =  require('../helper/CRUDController');
var model =  require(modelPath);

module.exports.name = name;
module.exports.path = '/' + name.toLowerCase();

module.exports.create =  function(){
	return CRUDController.create(model.name, modelPath );
};