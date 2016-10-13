'use strict';

var mongoose =  require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = new mongoose.Schema({
	nome:String,
	descricao:String,
	quantidade:Number,
	dataCriacao : { type: Date, default: Date.now },
	deletado: Boolean,	
	desmama : {
		periodo  : Number,
		peso : Number
	},
	cobertura : {
		dias : Number,
		periodo : Number,
		peso : Number,
		gestacao : Number,
		diasSecagem : Number 
	}
});

schema.plugin(mongoosePaginate);

module.exports.name = 'Raca';
module.exports.schema = schema;	