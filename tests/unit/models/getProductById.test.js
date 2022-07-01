const sinon = require('sinon');
const { expect } = require('chai');

const { connection } = require('../../../helpers');
const models = require('../../../models');

describe('Testa a função getProductById da camada models', () => {
  const paydoadProduct = {
    id: 2,
    name: 'Traje de encolhimento',
  };

  describe('em caso de sucesso', () => {
    const ID = 2;

    before(async () => {
      const execute = [paydoadProduct];
      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(async () => {
      connection.execute.restore();
    });

    it('deve retornar um objeto', async () => {
      const response = await models.product.getProductById(ID);
      expect(response).to.be.a('object');
    });

    it('deve retornar um objeto com "id" e "name" do produto', async () => {
      const response = await models.product.getProductById(ID);
      expect(response).to.be.equal(paydoadProduct);
    });
  });
});