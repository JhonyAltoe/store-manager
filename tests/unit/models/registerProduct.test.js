const sinon = require('sinon');
const { expect } = require('chai');

const { connection } = require('../../../helpers');
const models = require('../../../models');

describe('Testa a função "registerProduct" da camada models', () => {
  const paydoadResult = [
    {
      insertId: 4,
    }
  ];

  const paydoadProductResponse = {
    name: 'ProdutoX',
    id: 4,
  };

  const product = { name: 'ProdutoX' };

  describe('em caso de sucesso', () => {

    before(async () => {
      sinon.stub(connection, 'execute').resolves(paydoadResult);
    });

    after(async () => {
      connection.execute.restore();
    });

    it('deve retornar o objeto cadastrado', async () => {
      const response = await models.product.registerProduct(product);
      expect(response).to.deep.equal(paydoadProductResponse);
    });
  });
});