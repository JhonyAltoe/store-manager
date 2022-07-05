const {
  getAllProducts,
  getProductById,
  registerProduct,
} = require('./product');

const {
  registerSales,
  handleCheckerIds,
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
  },
};