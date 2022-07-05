const { connection } = require('../../helpers');

const getAllProducts = async (id) => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products WHERE id = ?',
    [id]);
  return result;
};

module.exports = getAllProducts;