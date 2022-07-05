const services = require('../../services');

const registerSales = async (req, res, next) => {
  const sales = req.body;

  try {
    const response = await services.sales.registerSales(sales);

    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = registerSales;