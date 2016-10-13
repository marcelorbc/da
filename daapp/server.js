'use strict';
var chalk = require('chalk');



var app = require('./config/lib/app');
var server = app.start(2000, function(err, data) {
  console.log(chalk.yellow(`
*****************************************************************************

Digital Agris App v1.0.0.
Aguarde enquanto estamos iniciando o servidor da aplicação.
Servidor inicializado com sucesso ${data.time} ms
para consultar a aplicação acesse http://localhost:${data.port}/contatos

*****************************************************************************
`));
});
