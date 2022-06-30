const { httpStatusCode } = require('../helpers');

const errorMiddleware = (err, req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }

  return res.status(httpStatusCode.INTERNAL_SERVER).json({ message: err.message });
};

module.exports = errorMiddleware;