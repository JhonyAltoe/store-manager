const sinon = require('sinon');
const { expect } = require('chai');

const { connection } = require('../../../../helpers');
const models = require('../../../../models');

describe('Testa a função getAllProducts', () => {
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

  before(async () => {
    const execute = [payloadProducts];
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });
  
  describe('quando o retorno é bom sucedido', () => {

    it('retorna um array', async () => {
      const response = await models.product.getAllProducts();
      expect(response).to.be.a('array');
    });

    it('retorna um array de objetos com "id" e "name" dos produtos', async () => {
      const response = await models.product.getAllProducts();
      expect(response).to.be.equal(payloadProducts);
    });

  });
});