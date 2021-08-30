'use strict';


var mongoose = require('mongoose'),
  Produto = mongoose.model('Produtos');

exports.list_all_products = function(req, res) {
  Produto.find({}, function(err, produto) {
    if (err)
      res.send(err);
    res.json(produto);
  });
};




exports.create_a_product = function(req, res) {
  var new_product = new Produto(req.body);
  new_product.save(function(err, produto) {
    if (err)
      res.send(err);
    res.json(produto);
  });
};


exports.read_a_product = function(req, res) {
  Produto.findById(req.params.produtoId, function(err, produto) {
    if (err)
      res.send(err);
    res.json(produto);
  });
};


exports.update_a_product = function(req, res) {
  Produto.findOneAndUpdate({_id: req.params.produtoId}, req.body, {new: true}, function(err, produto) {
    if (err)
      res.send(err);
    res.json(produto);
  });
};


exports.delete_a_product = function(req, res) {


  Produto.remove({
    _id: req.params.produtoId
  }, function(err, produto) {
    if (err)
      res.send(err);
    res.json({ message: 'Produto deletado com sucesso!' });
  });
};