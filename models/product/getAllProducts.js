const { connection } = require('../../helpers');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM products');
  return result;
};

module.exports = getAllProducts;