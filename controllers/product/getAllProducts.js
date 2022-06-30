const services = require('../../services');

const getAllProducts = async (_req, res) => {
  const allProducts = await services.product.getAllProducts();

  res.status(200).json(allProducts);
};

module.exports = getAllProducts;