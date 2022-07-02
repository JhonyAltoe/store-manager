const Joi = require('joi');

const registerProductSchema = Joi.object({
  name: Joi
    .string()
    .min(5)
    .messages({
      'string.min': '"name" length must be at least 5 characters long',
    }),
});

module.exports = registerProductSchema;