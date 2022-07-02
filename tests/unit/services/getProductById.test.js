const sinon = require('sinon');
const { expect } = require('chai');

const models = require('../../../models');
const services = require('../../../services');

describe('Testa a função "getProductById" da camada service', () => {

  describe('quando o retorno é bem sucedido', () => {
    const ID_FROM_USER = 2
    const paydoadProduct = [
      {
        id: 2,
        name: 'Traje de encolhimento',
      },
    ];

    before(async () => {
      sinon.stub(models.product, 'getProductById').resolves(paydoadProduct);
    });

    after(async () => {
      models.product.getProductById.restore();
    });

    it('recebe um objeto com "id" e "name" do produto', async () => {
      const response = await services.product.getProductById(ID_FROM_USER);
      expect(response).to.deep.equal(paydoadProduct[0]);
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

    it('quando recebe array vazio retorna um erro com a menssagem "Product not found"', async () => {
      try {
        await services.product.getProductById();
        expect(1).to.be.equal(0);
      } catch (err) {
        expect(err.message).to.be.equal('Product not found');
        expect(err.statusCode).to.be.equal(404);
      };
    });
  });
});