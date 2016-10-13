var CRUDController =  require('./CRUDController');

module.exports.create =  function(){
	return CRUDController.create('Raca', '../models/racas')
}