'use strict';
module.exports = function(app) {
  var produtos = require('../controllers/lojaControllers');

  // produtos Routes
  app.route('/produtos')
    .get(produtos.list_all_products)
    .post(produtos.create_a_product);


  app.route('/produto/:produtoId')
    .get(produtos.read_a_product)
    .put(produtos.update_a_product)
    .delete(produtos.delete_a_product);
};