const sinon = require('sinon');
const { expect } = require('chai');

const { connection } = require('../../../helpers');
const models = require('../../../models');
const { mocks } = require('../../../helpers');

const { PAYLOAD_SALES_BY_ID } = mocks;

describe('Testa a função "getSaleById" da camada models', () => {
  afterEach(async () => {
    connection.execute.restore();
  });

  describe('quando o retorno é bem sucedido', () => {
    it('testa se a função tem a saída correta', async () => {
      sinon.stub(connection, 'execute').resolves([PAYLOAD_SALES_BY_ID]);

      const result = await models.sales.getSaleById(1);
      expect(result).to.deep.equal(PAYLOAD_SALES_BY_ID);
    });
  });
});