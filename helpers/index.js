const connection = require('./connection');
const httpStatusCode = require('./httpStatusCode');
const NewError = require('./newErrorCreator');
const { registerProductSchema, registerSalesSchema } = require('./joi');
const {
  PAYLOAD_ALL_SALES,
  PAYLOAD_QUANTITY_ZERO,
  PAYLOAD_RECEIVED_SALES,
  PAYLOAD_RETURN_SALES,
  PAYLOAD_WITHOUT_PRODUCT_ID,
  PAYLOAD_WITHOUT_QUANTITY,
  PL_SALES_WRONG_PRODUCT_ID,
  PAYLOAD_SALES_BY_ID,
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
    PAYLOAD_ALL_SALES,
    PAYLOAD_QUANTITY_ZERO,
    PAYLOAD_RECEIVED_SALES,
    PAYLOAD_RETURN_SALES,
    PAYLOAD_WITHOUT_PRODUCT_ID,
    PAYLOAD_WITHOUT_QUANTITY,
    PL_SALES_WRONG_PRODUCT_ID,
    PAYLOAD_SALES_BY_ID,
  },
};