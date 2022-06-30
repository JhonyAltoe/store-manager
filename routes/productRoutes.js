const express = require('express');
const controllers = require('../controllers');

const productRoutes = express.Router();

productRoutes.get('/', controllers.product.getAllProducts);
// productRoutes.get('/:id');

module.exports = productRoutes;