const models = require('../../models');
const { newErrorCreator, httpStatusCode } = require('../../helpers');

const getProductById = async (id) => {
  const product = await models.product.getProductById(id);
  if (product.length === 0) throw newErrorCreator('Product not found', httpStatusCode.NOT_FOUND);

  return product[0];
};

module.exports = getProductById;