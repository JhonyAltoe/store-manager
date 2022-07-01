const models = require('../../models');
const { httpStatusCode, NewError } = require('../../helpers');

const getProductById = async (id) => {
  const product = await models.product.getProductById(id);
  if (product.length === 0) throw new NewError('Product not found', httpStatusCode.NOT_FOUND);

  return product[0];
};

module.exports = getProductById;
