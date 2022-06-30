const services = require('../../services');

const getAllProducts = async (_req, res) => {
  try {
    const allProducts = await services.product.getAllProducts();

    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getAllProducts;