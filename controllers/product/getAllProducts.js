const services = require('../../services');

const getAllProducts = async (_req, res, next) => {
  try {
    const allProducts = await services.product.getAllProducts();

    return res.status(200).json(allProducts);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllProducts;
