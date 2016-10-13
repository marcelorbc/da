var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uri = 'mongodb://sophia:sophia@ds153785.mlab.com:53785/digitalagrisdev'

mongoose.connect(uri, { config: { autoIndex: false } });

mongoose.connection.on('connected', function (){
  console.log("Mongoose connected to " + uri);
});

var graceFullShutdown = function(msg, callback){
  mongoose.connection.close(function(){
    console.log('Mongoose disconnected through ' + msg);
    callback();
  })
}

process.once('SIGUSR2', function(){
    graceFullShutdown('nodemon restart', function(){
      process.kill(process.pid, 'SIGUSR2')
    })
})

process.on('SIGINT', function(){
    graceFullShutdown('app termination', function(){
      process.exit(0)
    })
})
process.on('SIGTERM', function(){
    graceFullShutdown('Heroku app shutdown', function(){
      process.exit(0)
    })
})


