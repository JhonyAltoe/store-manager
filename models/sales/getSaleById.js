const { connection } = require('../../helpers');

const getSaleById = async (id) => {
  const QUERY = `
    SELECT
      SA.date AS date,
      SP.product_id AS productId,
      SP.quantity AS quantity
    FROM StoreManager.sales_products AS SP
    INNER JOIN StoreManager.sales AS SA
    ON SP.sale_id = SA.id
    WHERE SP.sale_id = ?`;
  const [result] = await connection.execute(QUERY, [id]);
  return result;
};

module.exports = getSaleById;