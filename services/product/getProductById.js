const models = require('../../models');

const getProductById = async (id) => {
  const product = await models.product.getProductById(id);

  if (!product) throw new Error({ message: 'Product not found', status: 404 });

  return product;
};

module.exports = getProductById;