'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProdutosSchema = new Schema({
  nome: {
    type: String,
    required: 'Por favor, digite o nome do produto.'
  },
  preco: {
    type: Number,
    required: 'Por favor, digite o preço do produto.'
  },
  quantidade: {
    type: Number,
    required: 'Por favor, digite quantas unidades do produtos estão disponíveis.'
  }
});

module.exports = mongoose.model('Produtos', ProdutosSchema);