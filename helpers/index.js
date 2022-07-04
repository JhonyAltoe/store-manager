const connection = require('./connection');
const httpStatusCode = require('./httpStatusCode');
const NewError = require('./newErrorCreator');
const { registerProductSchema, registerSalesSchema } = require('./joi');

module.exports = {
  connection,
  httpStatusCode,
  NewError,
  Joi: {
    registerProductSchema,
    registerSalesSchema,
  },
};