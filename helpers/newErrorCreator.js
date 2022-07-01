class NewError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const newErrorCreator = (message, status) => new NewError(message, status);

module.exports = newErrorCreator;