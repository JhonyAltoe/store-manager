const {
  getAllProducts,
  getProductById,
  registerProduct,
} = require('./product');

const {
  registerSales,
  getProductsByIds,
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
  },
};