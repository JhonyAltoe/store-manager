const { httpStatusCode } = require('../helpers');

const errorHandle = (err, _req, res, _next) => (
  res.status(err.statusCode || httpStatusCode.INTERNAL_SERVER).json({ message: err.message })
);

module.exports = errorHandle;