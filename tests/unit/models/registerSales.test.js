const sinon = require('sinon');
const { expect } = require('chai');

const { connection } = require('../../../helpers');
const models = require('../../../models');

describe('Testa a função "registerSales" da camada models', () => {

  describe('em caso de sucesso', () => {

    const PAYLOAD_RECEIVED = [
      {
        "productId": 1,
        "quantity": 1
      },
      {
        "productId": 2,
        "quantity": 5
      }
    ];

    const PAYLOAD_RETURN = {
      "id": 3,
      "itemsSold": [
        {
          "productId": 1,
          "quantity": 1
        },
        {
          "productId": 2,
          "quantity": 5
        }
      ]
    };

    const PAYLOAD_SALE = [
      sale = {
        insertId: 3,
      },
    ]; 
    
    before(async () => {
      sinon.stub(connection, 'execute').resolves(PAYLOAD_SALE);
      sinon.stub(connection, 'query').resolves();
    });

    after(async () => {
      connection.execute.restore();
    });

    it('a função "registerSales" da camada models deve existir', () => {
      expect(models.sales.registerSales).to.be.a('function');
    });

    it('deve retornar receber os produtos e retornar o mesmo no formado correto', async () => {
      const response = await models.sales.registerSales(PAYLOAD_RECEIVED);
      expect(response).to.deep.equal(PAYLOAD_RETURN);
    });
  });
});