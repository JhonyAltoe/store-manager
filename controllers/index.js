const {
  getAllProducts,
  getProductById,
  registerProduct,
} = require('./product');

module.exports = {
  product: {
    getAllProducts,
    getProductById,
    registerProduct,
  },
};
