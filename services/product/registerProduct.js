const models = require('../../models');

const registerProduct = async (product) => {
  const result = await models.product.registerProduct(product);

  return result;
};

module.exports = registerProduct;