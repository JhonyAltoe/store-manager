const sinon = require('sinon');
const { expect } = require('chai');

const models = require('../../../models');
const services = require('../../../services');
const { mocks } = require('../../../helpers');

const {
  PAYLOAD_SALES_BY_ID
} = mocks;

describe('Testa a função "getSaleById" da camada service', () => {
  afterEach(async () => {
    models.sales.getSaleById.restore();
  });

  describe('Quando o retorno é mal sucedido', () => {
    it('deve retornar um erro com a mensagem "Sale not found"', async () => {
      sinon.stub(models.sales, 'getSaleById').resolves([]);

      try {
        await services.sales.getSaleById();
        expect.fail('A função deve lançar um erro!');
      } catch (err) {
        expect(err.message).to.be.equal('Sale not found');
        expect(err.statusCode).to.be.equal(404);
      }
    });
  });

  describe('Quando o retorno é bem sucedido', () => {
    it('deve retornar as vendas corretamente', async () => {
      sinon.stub(models.sales, 'getSaleById').resolves(PAYLOAD_SALES_BY_ID);

      const response = await services.sales.getSaleById(1);
      expect(response).to.deep.equal(PAYLOAD_SALES_BY_ID);
    });
  });
});