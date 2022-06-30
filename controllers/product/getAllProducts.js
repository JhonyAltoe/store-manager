const services = require('../../services');

const getAllProducts = async (_req, res) => {
  try {
    const allProducts = await services.product.getAllProducts();

    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllProducts;
