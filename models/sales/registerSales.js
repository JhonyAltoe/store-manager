const fs = require('fs');
const { connection } = require('../../helpers');

const registerSales = async (product) => {
  const [sale] = await connection.execute('INSERT INTO StoreManager.sales (date) VALUES (now());');

  const QUERY = fs.readFileSync(
    './helpers/scripts/salesInsert.sql',
    { encoding: 'utf-8' },
  ).toString();

  await Promise.all(product.map(({ productId, quantity }) =>
    connection.query(QUERY, [sale.insertId, productId, quantity])));

  const result = {
    id: sale.insertId,
    itemsSold: product,
  };
  
  return result;
};

module.exports = registerSales;
