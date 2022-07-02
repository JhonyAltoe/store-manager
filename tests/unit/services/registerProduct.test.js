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
});