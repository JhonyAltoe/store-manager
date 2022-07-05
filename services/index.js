const {
  getAllProducts,
  getProductById,
  registerProduct,
} = require('./product');

const {
  registerSales,
  handleCheckerIds,
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
    handleCheckerIds,
    getAllSales,
    getSaleById,
  },
};