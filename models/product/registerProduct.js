const { connection } = require('../../helpers');

const registerProduct = async (product) => {
  const { name } = product;
  
  const [result] = await connection.execute('INSERT INTO products (name) VALUES (?)',
    [name]);
  
  return { id: result.insertId, name };
};

module.exports = registerProduct;