const { connection } = require('../../helpers');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM product');
  return result;
};

module.exports = getAllProducts;