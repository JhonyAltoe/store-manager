const express = require('express');
const controllers = require('../controllers');

const productRoutes = express.Router();

productRoutes.get('/', controllers.product.getAllProducts);
productRoutes.get('/:id', controllers.product.getProductById);

module.exports = productRoutes;