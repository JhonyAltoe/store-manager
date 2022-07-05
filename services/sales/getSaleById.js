const models = require('../../models');
const { NewError, httpStatusCode } = require('../../helpers');

const getSaleById = async (id) => {
  const result = await models.sales.getSaleById(id);

  if (result.length === 0) throw new NewError('Sale not found', httpStatusCode.NOT_FOUND);

  return result;
};

module.exports = getSaleById;