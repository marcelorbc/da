var mongoose =  require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = new mongoose.Schema({
	nome:String,
	descricao:String,
	quantidade:Number
})

schema.plugin(mongoosePaginate)

module.exports.schema = schema;