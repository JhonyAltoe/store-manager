const services = require('../../services');

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await services.product.getProductById(id);

    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = getProductById;