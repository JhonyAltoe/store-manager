const sinon = require('sinon');
const { expect } = require('chai');

const { connection } = require('../../../helpers');
const models = require('../../../models');

describe('Testa a função "registerProduct" da camada models', () => {
  const PAYLOAD_RESULT = [
    {
      insertId: 4,
    }
  ];

  const PAYLOAD_PRODUCT_RESPONSE = {
    name: 'ProdutoX',
    id: 4,
  };

  const PRODUCT = { name: 'ProdutoX' };

  describe('em caso de sucesso', () => {

    before(async () => {
      sinon.stub(connection, 'execute').resolves(PAYLOAD_RESULT);
    });

    after(async () => {
      connection.execute.restore();
    });

    it('deve retornar o produto cadastrado', async () => {
      const response = await models.product.registerProduct(PRODUCT);
      expect(response).to.deep.equal(PAYLOAD_PRODUCT_RESPONSE);
    });
  });
});