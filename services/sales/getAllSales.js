const models = require('../../models');
const { NewError, httpStatusCode } = require('../../helpers');

const getAllSales = async () => {
  const result = await models.sales.getAllSales();

  if (result.length === 0) throw new NewError('Sale not found', httpStatusCode.NOT_FOUND);

  return result;
};

module.exports = getAllSales;