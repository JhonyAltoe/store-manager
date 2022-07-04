const models = require('../../models');
const { NewError, httpStatusCode, Joi } = require('../../helpers');

const handlerError = (error) => {
  if (error.message === '"productId" is required' || error.message === '"quantity" is required') {
    throw new NewError(error.message, httpStatusCode.BAD_REQUEST);
  }

  if (error.message === '"quantity" must be greater than or equal to 1') {
    throw new NewError(error.message, httpStatusCode.UNPROCESSABLE_ENTITY);
  }
};

const registerSales = async (products) => {
  const { error } = Joi.registerSalesSchema.validate(products);

  if (error) handlerError(error);
  
  const result = await models.sales.registerSales(products);
  return result;
};

module.exports = registerSales;