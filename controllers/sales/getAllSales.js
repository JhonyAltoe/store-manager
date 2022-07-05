const services = require('../../services');

const getAllSales = async (req, res, next) => {
  try {
    const response = await services.sales.getAllSales();
    
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllSales;