const express = require('express');
const controllers = require('../controllers');

const salesRoutes = express.Router();

salesRoutes.get('/', controllers.sales.getAllSales);
salesRoutes.get('/:id', controllers.sales.getSaleById);

salesRoutes.post('/', controllers.sales.registerSales);

module.exports = salesRoutes;