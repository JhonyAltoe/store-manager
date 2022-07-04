const sinon = require('sinon');
const { expect } = require('chai');

const models = require('../../../models');
const services = require('../../../services');

describe('Testa a função "registerSales" da camada service', () => {

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

  describe('Quando o retorno é bem sucedido', () => {
    before(async () => {
      sinon.stub(models.sales, 'registerSales').resolves(PAYLOAD_RETURN);
    });

    after(async () => {
      models.sales.registerSales.restore();
    });

    it('recebe as vendas e deve retornar um objeto com as keys ID e itemsSold o array de vendas', async () => {
      const response = await services.sales.registerSales(PAYLOAD_RECEIVED);
      expect(response).to.deep.equal(PAYLOAD_RETURN);
    });
  });

  describe('Quando o retorno é mal sucedido', () => {
    const PAYLOAD_WITHOUT_PRODUCT_ID = [
      {
        productId: 1,
        quantity: 1,
      },
      {
        quantity: 5,
      },
    ];

    const PAYLOAD_WITHOUT_QUANTITY = [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 1,
      },
    ];

    before(async () => {
      sinon.stub(models.sales, 'registerSales').resolves();
    });

    after(async () => {
      models.sales.registerSales.restore();
    });

    it('deve retornar um erro com a mensagem \'"productId" is required\' e código 400 se receber o productId vazio', async () => {
      try {
        await services.sales.registerSales(PAYLOAD_WITHOUT_PRODUCT_ID);
      } catch (err) {
        expect(err.message).to.be.equal('"productId" is required');
        expect(err.statusCode).to.be.equal(400);
      }
    });

    it('deve retornar um erro com a mensagem \'"quantity" is required\' e código 400 se receber o productId vazio', async () => {
      try {
        await services.sales.registerSales(PAYLOAD_WITHOUT_QUANTITY);
      } catch (err) {
        expect(err.message).to.be.equal('"quantity" is required');
        expect(err.statusCode).to.be.equal(400);
      }
    });
  });
});