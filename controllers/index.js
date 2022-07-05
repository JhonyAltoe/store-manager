const {
  getAllProducts,
  getProductById,
  registerProduct,
} = require('./product');

const {
  registerSales,
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
    getAllSales,
    getSaleById,
  },
};
