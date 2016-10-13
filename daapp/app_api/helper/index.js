'use strict';

module.exports.createError = function (e){
    return {
        'error' : e.message,
        'stack' : e.stack
    };
};

module.exports.walk = function(currentDirPath, callback) {
    var fs = require('fs'),
        path = require('path');
    fs.readdir(currentDirPath, function (err, files) {
        
        if (err) {
            throw new Error(err);
        }
        files.forEach(function (name) {
            var filePath = path.join(currentDirPath, name);
            var stat = fs.statSync(filePath);
            if (stat.isFile()) {
                callback(filePath);
            } else if (stat.isDirectory()) {
                walk(filePath, callback);
            }
        });
    });
}