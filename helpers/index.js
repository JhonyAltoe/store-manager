const connection = require('./connection');
const httpStatusCode = require('./httpStatusCode');
const { newErrorCreator, NewError } = require('./newErrorCreator');

module.exports = {
  connection,
  httpStatusCode,
  newErrorCreator,
  NewError,
};