const Joi = require('joi');

const service = Joi.object().keys({
  productId: Joi.number().required().messages({ 'any.required': '"productId" is required' }),
  quantity: Joi.number().required().messages({ 'any.required': '"quantity" is required' }),
});

const registerSalesSchema = Joi.array().items(service);

module.exports = registerSalesSchema;