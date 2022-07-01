const models = require('../../models');
const { newErrorCreator, httpStatusCode } = require('../../helpers');

const getProductById = async (id) => {
  const product = await models.product.getProductById(id);
  console.log(product);
  if (product.length === 0) throw newErrorCreator('Product not found', httpStatusCode.NOT_FOUND);

  return product;
};

module.exports = getProductById;