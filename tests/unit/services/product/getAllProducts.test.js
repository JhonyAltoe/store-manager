const sinon = require('sinon');
const { expect } = require('chai');

const models = require('../../../../models');
const services = require('../../../../services');

describe('Testa a função getAllProducts da camada service', () => {
  const payloadProducts = [
    {
      "id": 1,
      "name": "Martelo de Thor"
    },
    {
      "id": 2,
      "name": "Traje de encolhimento"
    },
    {
      "id": 3,
      "name": "Escudo do Capitão América"
    }
  ];

  describe('quando o retorno é bem sucedido', () => {
  
    before(async () => {
      const ARR_PRODUCTS = payloadProducts;
      sinon.stub(models.product, 'getAllProducts').resolves(ARR_PRODUCTS);
    });

    after(async () => {
      models.product.getAllProducts.restore();
    });

    it('recebe um array', async () => {
      const response = await services.product.getAllProducts();
      expect(response).to.be.a('array');
    });

    it('recebe um array de objetos com "id" e "name" dos produtos', async () => {
      const response = await services.product.getAllProducts();
      expect(response).to.be.equal(payloadProducts);
    });

  });
});