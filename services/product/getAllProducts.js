const models = require('../../models');

const getAllProducts = async () => {
  const allProducts = await models.product.getAllProducts();
  return allProducts;
};

module.exports = getAllProducts;