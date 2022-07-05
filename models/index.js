const {
  getAllProducts,
  getProductById,
  registerProduct,
} = require('./product');

const {
  registerSales,
  getProductsByIds,
  getAllSales,
  getSaleById,
} = require('./sales');

module.exports = {
  product: {
    getAllProducts,
    getProductById,
    registerProduct,
  },
  sales: {
    registerSales,
    getProductsByIds,
    getAllSales,
    getSaleById,
  },
};