const { connection } = require('../../helpers');

const getProductsByIds = async (ids) => {
  const queryPart = ids.map((_e) => '?');
  const QUERY = `SELECT * FROM StoreManager.products WHERE id IN (${queryPart})`;
  const [result] = await connection.execute(QUERY, ids);
  return result;
};

module.exports = getProductsByIds;