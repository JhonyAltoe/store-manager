const Joi = require('joi');

const service = Joi.object().keys({
  productId: Joi
    .number()
    .required()
    .messages({
      'any.required': '"productId" is required',
    }),
  quantity: Joi
    .number()
    .min(1)
    .required()
    .messages({
      'any.required': '"quantity" is required',
      'number.min': '"quantity" must be greater than or equal to 1',
    }),
});

const registerSalesSchema = Joi.array().items(service);

module.exports = registerSalesSchema;