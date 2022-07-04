const connection = require('./connection');
const httpStatusCode = require('./httpStatusCode');
const NewError = require('./newErrorCreator');
const { registerProductSchema, registerSalesSchema } = require('./joi');
const {
  PAYLOAD_RECEIVED_SALES,
  PAYLOAD_RETURN_SALES,
  PAYLOAD_WITHOUT_PRODUCT_ID,
  PAYLOAD_WITHOUT_QUANTITY,
  PAYLOAD_QUANTITY_ZERO,
} = require('./mocks');

module.exports = {
  connection,
  httpStatusCode,
  NewError,
  Joi: {
    registerProductSchema,
    registerSalesSchema,
  },
  mocks: {
    registerSales: {
      PAYLOAD_RECEIVED_SALES,
      PAYLOAD_RETURN_SALES,
      PAYLOAD_WITHOUT_PRODUCT_ID,
      PAYLOAD_WITHOUT_QUANTITY,
      PAYLOAD_QUANTITY_ZERO,
    },
  },
};