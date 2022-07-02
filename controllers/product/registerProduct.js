const services = require('../../services');

const registerProduct = async (req, res, next) => {
  try {
    const product = req.body;
    const response = await services.product.registerProduct(product);

    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = registerProduct;