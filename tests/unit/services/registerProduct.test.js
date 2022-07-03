const sinon = require('sinon');
const { expect } = require('chai');

const models = require('../../../models');
const services = require('../../../services');

describe('Testa a função "registerProduct" da camada service', () => {

  describe('Quando o retorno é bem sucedido', () => {
    const PAYLOAD_PRODUCT_RESPONSE = {
      name: 'ProdutoX',
      id: 4,
    };

    const PRODUCT = { name: 'ProdutoX' };

    before(async () => {
      sinon.stub(models.product, 'registerProduct').resolves(PAYLOAD_PRODUCT_RESPONSE);
    });

    after(async () => {
      models.product.registerProduct.restore();
    });

    it('recebe o produto e deve retornar o produto cadastrado', async () => {
      const response = await services.product.registerProduct(PRODUCT);
      expect(response).to.deep.equal(PAYLOAD_PRODUCT_RESPONSE);
    });
  });

  describe('Quando o retorno é mal sucedido', () => {
    const PRODUCT_EMPTY = {};

    const PRODUCT_LENGTH_4 = { name: 'Prod' };

    before(async () => {
      sinon.stub(models.product, 'registerProduct').resolves();
    });

    after(async () => {
      models.product.registerProduct.restore();
    });

    it('retorn um erro quando o produto vem vazio com a menssagem \'"name" is required\' e código 400', async () => {
      try {
        const response = await services.product.registerProduct(PRODUCT_EMPTY);
        expect(response).to.be(null);
      } catch (err) {
        expect(err.message).to.be.equal("\"name\" is required");
        expect(err.statusCode).to.be.equal(400);
      }
    });

    it('retorn um erro quando o produto vem vazio com a menssagem \'"name" length must be at least 5 characters long\' e código 422', async () => {
      try {
        const response = await services.product.registerProduct(PRODUCT_LENGTH_4);
        expect(response).to.be(null);
      } catch (err) {
        expect(err.message).to.be.equal('"name" length must be at least 5 characters long');
        expect(err.statusCode).to.be.equal(422);
      }
    });

    it('deve retornar um erro com a mensagem \'"productId" is required\' e código 400 se receber um produto vazio', async () => {
      try {
        await services.product.registerProduct([]);
      } catch (err) {
        expect(err.message).to.be.equal('"productId" is required');
        expect(err.statusCode).to.be.equal(400);
      }
    });
  });
});