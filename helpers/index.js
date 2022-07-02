const connection = require('./connection');
const httpStatusCode = require('./httpStatusCode');
const { newErrorCreator, NewError } = require('./newErrorCreator');
const { registerProductSchema } = require('./joi');

module.exports = {
  connection,
  httpStatusCode,
  newErrorCreator,
  NewError,
  Joi: {
    registerProductSchema,
  },
};