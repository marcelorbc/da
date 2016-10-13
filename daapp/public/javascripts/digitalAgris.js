var digitalAgris = (function(){
	var loadContatos = function(success, fail){
		$.ajax({
		  url: '/api/contatos',
		  success: success
		}).fail(fail);
	}
	
	var loadContatosPage = function(num, success, fail){
		$.ajax({
		  url: '/api/contatos/bypage/' + num,
		  success: success
		}).fail(fail);
	}
	var incluirContatos = function(contato, success){
		$.ajax({
		  type: "POST",
		  url: '/api/contatos',
		  datatype: "json",
		  contentType: "application/json",
		  data: JSON.stringify(contato),
		  success: success
		});
	}
	var excluirContatos = function(id, success){
		$.ajax({
		  type: "DELETE",
		  url: '/api/contatos/' + id,
		  datatype: "json",
		  success: success
		});
	}
	var atualizarContatos = function(id, success){
		$.ajax({
		  type: "PUT",
		  url: '/api/contatos/' + id,
		  datatype: "json",
		  data: JSON.stringify(contato),
		  success: success
		});
	}
	return {
		carregarContatos:loadContatos,
		carregarContatosPage:loadContatosPage,
		incluirContato: incluirContatos,
		excluirContato: atualizarContatos,
		atualizarContato: atualizarContatos

	}
})()

// De https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys chamado de non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}