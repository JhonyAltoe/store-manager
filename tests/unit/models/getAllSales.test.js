const sinon = require('sinon');
const { expect } = require('chai');

const { connection } = require('../../../helpers');
const models = require('../../../models');
const { NewError, mocks } = require('../../../helpers');

const { PAYLOAD_ALL_SALES } = mocks;

describe('Testa a função "getAllSales" da camada models', () => {
  afterEach(async () => {
    connection.execute.restore();
  });

  describe('quando o retorno é mal sucedido', () => {
    const error = new NewError('Erro de teste');
    
    it('deve receber o erro do connetion corretamente', async () => {
      sinon.stub(connection, 'execute').throws(error);
      
      try {
        await models.sales.getAllSales();
        expect.fail('deve lançar um erro');
      } catch (err) {
        expect(err.message).to.be.equal('Erro de teste');
      }
    });
  });

  describe('quando o retorno é bem sucedido', () => {
    it('testa se a função tem a saída correta', async () => {
      sinon.stub(connection, 'execute').resolves([PAYLOAD_ALL_SALES]);

      const result = await models.sales.getAllSales();
      expect(result).to.deep.equal(PAYLOAD_ALL_SALES);
    });
  });
});