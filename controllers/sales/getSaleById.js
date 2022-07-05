const services = require('../../services');

const getSaleById = async (req, res, next) => {
  const { id } = req.params;
  
  try {
    const response = await services.sales.getSaleById(id);

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = getSaleById;