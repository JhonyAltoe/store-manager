const sinon = require('sinon');
const { expect } = require('chai');
const { NewError } = require('../../../helpers');

const services = require('../../../services');
const controllers = require('../../../controllers');
const { mocks } = require('../../../helpers');

const { PAYLOAD_RECEIVED_SALES, PAYLOAD_RETURN_SALES } = mocks;

describe('Testa a função "registerSales" da camada controllers', () => {

  describe('quando o retorno é bem sucedido', () => {
    const res = {};
    const req = {};

    before(async () => {
      req.body = PAYLOAD_RECEIVED_SALES;

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(services.sales, 'registerSales').resolves(PAYLOAD_RETURN_SALES);
    });

    after(async () => {
      services.sales.registerSales.restore();
    });

    it('testa se "registerSales" é uma função', () => {
      expect(controllers.sales.registerSales).to.be.a('function');
    });

    it('é chamado o status com o códico 201', async () => {
      await controllers.sales.registerSales(req, res);
      expect(res.status.calledWith(201)).to.be.equal(true);
    });

    it('deve retornar um objeto com as keys ID e itemsSold com o array das vendas', async () => {
      await services.sales.registerSales(req, res);
      expect(res.json.calledWith(PAYLOAD_RETURN_SALES)).to.be.equal(true);
    });

  });

  describe('quando o retorno é mal sucedido', () => {
    const res = {};
    const req = {};
    const next = sinon.spy();

    const error = new NewError("Message error test", 500);

    before(async () => {
      req.body = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(services.sales, 'registerSales').throws(error);
    });

    after(async () => {
      services.sales.registerSales.restore();
    });

    it('verifica se o erro é lançado e capturado corretamente pelo next', async () => {
      await controllers.sales.registerSales(req, res, next);

      expect(next.calledWith(error)).to.be.equal(true);
    })
  });
});