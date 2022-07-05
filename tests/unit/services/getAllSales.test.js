const sinon = require('sinon');
const { expect } = require('chai');

const models = require('../../../models');
const services = require('../../../services');
const { mocks } = require('../../../helpers');

const {
  PAYLOAD_ALL_SALES,
} = mocks;

describe('Testa a função "getAllSales" da camada service', () => {
  afterEach(async () => {
    models.sales.getAllSales.restore();
  });

  describe('Quando o retorno é mal sucedido', () => {
    it('deve retornar um erro com a mensagem "Sale not found"', async () => {
      sinon.stub(models.sales, 'getAllSales').resolves([]);

      try {
        await services.sales.getAllSales();
        expect.fail('A função deve lançar um erro!');
      } catch (err) {
        expect(err.message).to.be.equal('Sale not found');
        expect(err.statusCode).to.be.equal(404);
      }
    });
  });

  describe('Quando o retorno é bem sucedido', () => {
    it('deve retornar as vendas corretamente', async () => {
      sinon.stub(models.sales, 'getAllSales').resolves(PAYLOAD_ALL_SALES);

      const response = await services.sales.getAllSales();
      expect(response).to.deep.equal(PAYLOAD_ALL_SALES);
    });
  });
});