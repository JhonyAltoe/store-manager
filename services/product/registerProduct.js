const models = require('../../models');
const { Joi, NewError, httpStatusCode } = require('../../helpers');

const registerProduct = async (product) => {
  const { name } = product;

  if (!name) throw new NewError('"name" is required', httpStatusCode.BAD_REQUEST);

  const { error } = Joi.registerProductSchema.validate({ name });

  if (error) throw new NewError(error.message, httpStatusCode.UNPROCESSABLE_ENTITY);
  
  const result = await models.product.registerProduct(product);
  return result;
};

module.exports = registerProduct;