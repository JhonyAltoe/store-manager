const fs = require('fs');
const { connection } = require('../../helpers');

const registerSales = async (product) => {
  const [sale] = await connection.execute('INSERT INTO sales (date) VALUES (now());');

  const QUERY = fs.readFileSync('./models/sales/salesInsert.sql', { encoding: 'utf-8' }).toString();

  product.forEach(async ({ productId, quantity }) => {
    await connection.query(QUERY, [sale.insertId, productId, quantity]);
  });

  const result = {
    id: sale.insertId,
    itemsSold: product,
  };

  console.log(result);

  return result;
};

// const array = [
//   {
//     productId: 1,
//     quantity: 1,
//   },
//   {
//     productId: 2,
//     quantity: 5,
//   },
// ];

// registerSales(array);

module.exports = registerSales;
