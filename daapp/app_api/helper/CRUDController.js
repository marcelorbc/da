'use strict';
var chalk = require('chalk');
const util = require('util')

var mongoose = require('mongoose');
var helpers = require('../helper');

module.exports.create =  function(modelName /*Nome da entidade*/, modelPath /*Path para o modulo*/){
    var modelRef =  require(modelPath);
    function consultarPorId(req, res) {
        var Model = mongoose.model(modelName, modelRef.schema);
        console.log(chalk.green(`Acessando CRUDController ${modelName}.consultarPorId (${req.params.id})`));
        Model.findById(req.params.id, function(err, result){
            if (err){
                res.send(helpers.createError(err));
                res.end();
            }else{
                res.send(result);
            }
        });
    }
    function listar(req, res) {
        var Model = mongoose.model(modelName, modelRef.schema);
        console.log(typeof(req.query.page));
        if(typeof(req.query.page) !== 'undefined'){
            Model.paginate({}, { page: req.query.page, limit: (req.query.rowCount===-1?9999:req.query.rowCount)}, function(err, result){
                if (err) {res.send(err);}
                
                res.send({
                    current: result.page,
                    total: result.total,
                    rowCount: result.limit,
                    rows : result.docs,
                });

            });
        }else{
            Model.find(function(err, result){
                if (err) {res.send(err);}
                
                res.send(result);

            });         
        }

    }

    function criar(req, res, cb) {
        var Model = mongoose.model(modelName, modelRef.schema);
            var dados = req.body;
            console.log(chalk.green(`Acessando CRUDController ${modelName}.criar (${util.inspect(req.body)})`));
            var entity = new Model(dados);
            entity.save(function(err, obj){
                if(err){
                    console.log(chalk.green(`Erro ao salvar objeto `));
                    res.send(helpers.error(err));
                    res.end();
                }else{
                    console.log(chalk.green(`Objeto salvo no banco de dados ${obj}`));
                    res.send(obj);
                    res.end();
                }
            });

        
        
    }

    function alterar(req, res) {
        var Model = mongoose.model(modelName, modelRef.schema);
        try{
            var entity = new Model(JSON.parse(req.body));
            entity.save();
        }catch(e){
            console.log(e);
        }

        res.end();
        
    }
    function excluir(req, res) {
        var Model = mongoose.model(modelName, modelRef.schema);
        try{
            var entity = new Model(JSON.parse(req.body));
            entity.save();  
        }catch(e){
            res.send(helpers.createError(e));
        }
        res.end();
    }
    return {
        consultarPorId:consultarPorId,
        criar:criar,
        excluir:excluir,
        alterar:alterar,
        listar:listar
    };
};