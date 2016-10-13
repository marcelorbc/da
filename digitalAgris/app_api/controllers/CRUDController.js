var mongoose = require('mongoose')


module.exports.create =  function(modelName, modelPath){
    var modelRef =  require(modelPath);
    function consultarPorId(req, res, next) {
        var Model = mongoose.model(modelName, modelRef.schema)

        Model.findById(req.params.id, function(err, result){
            if (err) res.send(err);

            res.send(result);
        });
    }
    function listar(req, res, next) {
        var Model = mongoose.model(modelName, modelRef.schema)
        console.log(typeof(req.query.page))
        if(typeof(req.query.page) != 'undefined'){
            Model.paginate({}, { page: req.query.page, limit: (req.query.rowCount==-1?9999:req.query.rowCount)}, function(err, result){
                if (err) res.send(err);
                
                res.send({
                    current: result.page,
                    total: result.total,
                    rowCount: result.limit,
                    rows : result.docs,
                });
                res.end()
            })
        }else{
            Model.find(function(err, result){
                if (err) res.send(err);
                
                res.send(result);
                res.end()
            });         
        }

    }

    function criar(req, res, next) {
        var Model = mongoose.model(modelName, modelRef.schema)
        try{
            var dados = req.body;
            
            var contato = new Model(dados);
            contato.save()  
        }catch(e){
            console.log(e)
            console.log(e.stack)
        }

        res.end();
        
    }

    function alterar(req, res, next) {
        var Model = mongoose.model(modelName, modelRef.schema)
        try{
            var contato = new Model(JSON.parse(req.body));
            contato.save()  
        }catch(e){
            console.log(e)
        }

        res.end();
        
    }
    function excluir(req, res, next) {
        var Model = mongoose.model(modelName, modelRef.schema)
        try{
            var contato = new Model(JSON.parse(req.body));
            contato.save()  
        }catch(e){
            console.log(e)
        }

        res.end();
        
    }
    return {
        consultarPorId:consultarPorId,
        criar:criar,
        excluir:excluir,
        alterar:alterar,
        listar:listar
    }
} 


