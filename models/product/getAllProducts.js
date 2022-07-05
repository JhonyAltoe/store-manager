const { connection } = require('../../helpers');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');
  return result;
};

module.exports = getAllProducts;