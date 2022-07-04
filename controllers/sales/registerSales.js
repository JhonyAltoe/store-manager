const services = require('../../services');

const registerSales = async (req, res, next) => {
  try {
    const sales = req.body;
    const response = await services.sales.registerSales(sales);

    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = registerSales;