const express = require('express');
const productRoutes = require('./productRoutes');

const route = express.Router();

route.use('/products', productRoutes);

module.exports = route;