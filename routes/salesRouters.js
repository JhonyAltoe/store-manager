const express = require('express');
const controllers = require('../controllers');

const productRoutes = express.Router();

productRoutes.post('/', controllers.sales.registerSales);

module.exports = productRoutes;