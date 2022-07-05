const sinon = require('sinon');
const { expect } = require('chai');

const models = require('../../../models');
const services = require('../../../services');
const { mocks } = require('../../../helpers');

const {
  PAYLOAD_RECEIVED_SALES,
  PAYLOAD_RETURN_SALES,
  PAYLOAD_WITHOUT_PRODUCT_ID,
  PAYLOAD_WITHOUT_QUANTITY,
  PAYLOAD_QUANTITY_ZERO,
  // PL_SALES_WRONG_PRODUCT_ID
} = mocks;

describe('Testa a função "registerSales" da camada service', () => {
  afterEach(async () => {
    models.sales.registerSales.restore();
    services.sales.handleCheckerIds.restore();
  });

  describe('Quando o retorno é bem sucedido', () => {
    it('deve retornar um objeto com as keys ID e itemsSold com o array das vendas', async () => {
      sinon.stub(models.sales, 'registerSales').resolves(PAYLOAD_RETURN_SALES);
      sinon.stub(services.sales, 'handleCheckerIds').resolves();

      const response = await services.sales.registerSales(PAYLOAD_RECEIVED_SALES);
      expect(response).to.deep.equal(PAYLOAD_RETURN_SALES);
    });
  });

  describe('Quando o retorno é mal sucedido', () => {
    it('deve retornar um erro com a mensagem \'"productId" is required\' e código 400 se receber o productId vazio', async () => {
      sinon.stub(models.sales, 'registerSales').resolves();
      sinon.stub(services.sales, 'handleCheckerIds').resolves();

      try {
        await services.sales.registerSales(PAYLOAD_WITHOUT_PRODUCT_ID);
        expect.fail('A função "registerSales" deve lançar um erro!');
      } catch (err) {
        expect(err.message).to.be.equal('"productId" is required');
        expect(err.statusCode).to.be.equal(400);
      }
    });

    it('deve retornar um erro com a mensagem \'"quantity" is required\' e código 400 se receber o productId vazio', async () => {
      sinon.stub(models.sales, 'registerSales').resolves();
      sinon.stub(services.sales, 'handleCheckerIds').resolves();

      try {
        await services.sales.registerSales(PAYLOAD_WITHOUT_QUANTITY);
        expect.fail('A função "registerSales" deve lançar um erro!');
      } catch (err) {
        expect(err.message).to.be.equal('"quantity" is required');
        expect(err.statusCode).to.be.equal(400);
      }
    });

    it('deve retornar um erro com a mensagem \'"quantity" must be greater than or equal to 1\' e código 422 se a "quantity" for zero', async () => {
      sinon.stub(models.sales, 'registerSales').resolves();
      sinon.stub(services.sales, 'handleCheckerIds').resolves();

      try {
        await services.sales.registerSales(PAYLOAD_QUANTITY_ZERO);
        expect.fail('A função "registerSales" deve lançar um erro!');
      } catch (err) {
        expect(err.message).to.be.equal('"quantity" must be greater than or equal to 1');
        expect(err.statusCode).to.be.equal(422);
      }
    });
  });

  // describe('TESTE', () => {
  //   it('deve retornar um erro com a mensagem \'sales not found\' e código 404 se a "quantity" for zero', async () => {
  //     const error = new NewError('sales not found', 404);

  //     sinon.stub(services.sales, 'handleCheckerIds').throws(error);
  //     sinon.stub(models.sales, 'registerSales').resolves();

  //     try {
  //       await services.sales.registerSales(PL_SALES_WRONG_PRODUCT_ID);
  //       expect.fail('A função "registerSales" deve lançar um erro!');
  //     } catch (err) {
  //       expect(err.message).to.be.equal('sales not found');
  //       expect(err.statusCode).to.be.equal(404);
  //     }
  //   });
  // });
});