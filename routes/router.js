const express = require('express');
const productRoutes = require('./productRoutes');
const salesRouters = require('./salesRouters');

const route = express.Router();

route.use('/products', productRoutes);
route.use('/sales', salesRouters);

module.exports = route;