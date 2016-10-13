var mongoose =  require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = new mongoose.Schema({
	titulo:String,
	autor:String
})

schema.plugin(mongoosePaginate)

module.exports.schema = schema;