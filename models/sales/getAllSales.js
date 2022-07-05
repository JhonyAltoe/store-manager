const { connection } = require('../../helpers');

const getAllSales = async () => {
  const QUERY = `
    SELECT
      SP.sale_id AS saleId,
      SA.date AS date,
      SP.product_id AS productId,
      SP.quantity AS quantity
    FROM StoreManager.sales_products AS SP
    INNER JOIN StoreManager.sales AS SA
    ON SP.sale_id = SA.id
    ORDER BY sale_id, product_id`;
  const [result] = await connection.execute(QUERY);
  return result;
};

module.exports = getAllSales;