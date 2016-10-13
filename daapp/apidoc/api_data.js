define({ "api": [
  {
    "type": "get",
    "url": "/contatos/:id",
    "title": "Buscar informações detalhadas de contatos",
    "name": "Consultar_Por_ID",
    "group": "Contatos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "identificador",
            "description": "<p>do Contato</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Json",
            "description": "<p>com os dados do Contato.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"nome\": \"Marcelo Bueno\",\n  \"telefones\": [\"912345678\"]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Contato",
            "description": "<p>não encontrado o <code>id</code> do Contato não foi encontrado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app_api/controllers/contatos.js",
    "groupTitle": "Contatos"
  },
  {
    "type": "get",
    "url": "/contatos/:id",
    "title": "Buscar informações detalhadas de contatos",
    "name": "Consultar_Por_ID",
    "group": "Contatos_Vers_o_2_0_0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "identificador",
            "description": "<p>do Contato</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Json",
            "description": "<p>com os dados do Contato.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"nome\": \"Marcelo Bueno\",\n  \"telefones\": [\"912345678\"]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Contato",
            "description": "<p>não encontrado o <code>id</code> do Contato não foi encontrado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app_api/controllers/contatos.V2.0.0.js",
    "groupTitle": "Contatos_Vers_o_2_0_0"
  },
  {
    "type": "get",
    "url": "/livros/:id",
    "title": "Buscar informações de livros",
    "name": "Consultar_Por_ID",
    "group": "Livros",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "identificador",
            "description": "<p>do Contato</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Json",
            "description": "<p>com os dados do Contato.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"titulo\": \"Meu primeiro Livro\",\n  \"autor\": \"Marcelo Bueno\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Livro",
            "description": "<p>não encontrado o <code>id</code> do livro não foi encontrado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"LivroNãoEncontrado\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app_api/controllers/livros.js",
    "groupTitle": "Livros"
  },
  {
    "type": "post",
    "url": "/livros",
    "title": "Criar novo livro",
    "name": "Criar_novo",
    "group": "Livros",
    "parameter": {
      "examples": [
        {
          "title": "JSON deve ser enviado no corpo da chamada:",
          "content": "\n{\n\ttitulo:\"Meu primeiro livro\",\n\tautor:\"Marcelo Bueno\"\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Json",
            "description": "<p>com os dados do Contato.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Livro",
            "description": "<p>não encontrado o <code>id</code> do livro não foi encontrado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"LivroNãoEncontrado\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app_api/controllers/livros.js",
    "groupTitle": "Livros"
  }
] });
