const sinon = require('sinon');
const { expect } = require('chai');

const models = require('../../../../models');
const services = require('../../../../services');
const { product } = require('../../../../models');

describe('Testa a função getProductById da camada service', () => {

  describe('quando o retorno é bem sucedido', () => {
    // const ID_FROM_USER = 2
    const paydoadProduct = {
      id: 2,
      name: 'Traje de encolhimento',
    };

    before(async () => {
      const PRODUCT = paydoadProduct;
      sinon.stub(models.product, 'getProductById').resolves(PRODUCT);
    });

    after(async () => {
      models.product.getProductById.restore();
    });

    it('recebe um array', async () => {
      const response = await services.product.getProductById();
      expect(response).to.deep.equal(paydoadProduct);
    });
  });

  describe('quando o retorno é mal sucedido', () => {
    const paydoadProduct = [];

    before(async () => {
      sinon.stub(models.product, 'getProductById').resolves(paydoadProduct);
    });

    after(async () => {
      models.product.getProductById.restore();
    });

    it('espera lançar um erro', () => {
      expect(async () => await services.product.getProductById()).to.throw();
    });

  });
});