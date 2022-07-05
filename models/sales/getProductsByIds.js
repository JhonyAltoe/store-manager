const { connection } = require('../../helpers');

const getProductsByIds = async (ids) => {
  const QUERY = 'SELECT * FROM StoreManager.products WHERE id IN (?)';
  const [result] = await connection.execute(QUERY, ids);
  return result;
};

module.exports = getProductsByIds;