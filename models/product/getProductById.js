const { connection } = require('../../helpers');

const getAllProducts = async (id) => {
  const [result] = await connection.execute('SELECT * FROM products WHERE id = ?',
    [id]);
  return result;
};

module.exports = getAllProducts;