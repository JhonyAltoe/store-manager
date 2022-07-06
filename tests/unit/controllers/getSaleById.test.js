const sinon = require('sinon');
const { expect } = require('chai');
// const { NewError } = require('../../../helpers');

const services = require('../../../services');
const controllers = require('../../../controllers');
const { mocks } = require('../../../helpers');

const { PAYLOAD_SALES_BY_ID } = mocks;

describe('Testa a função "getSaleById" da camada controllers', () => {
  afterEach(() => {
    sinon.restore();
  });

  // describe('quando o retorno é mal sucedido', () => {
  //   const res = {};
  //   const req = {};
  //   const next = sinon.spy();

  //   const error = new NewError("Message error test", 500);

  //   before(async () => {
  //     req.body = {};

  //     res.status = sinon.stub().returns(res);
  //     res.json = sinon.stub().returns();

  //     sinon.stub(services.sales, 'getSaleById').throws(error);
  //   });

  //   it('verifica se o erro é lançado e capturado corretamente pelo next', async () => {
  //     await controllers.sales.getSaleById(req, res, next);

  //     expect(next.calledWith(error)).to.be.equal(true);
  //   })
  // });

  describe('quando o retorno é bem sucedido', () => {
    const res = {};
    const req = {
      params: 1,
    };

    before(async () => {
      req.body = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(services.sales, 'getSaleById').resolves(PAYLOAD_SALES_BY_ID);
    });

    it('é chamado o status com o códico 200', async () => {
      await controllers.sales.getSaleById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    // it('deve retornar um array com as vendas', async () => {
    //   await controllers.sales.getSaleById(req, res);
    //   expect(res.json.calledWith(PAYLOAD_SALES_BY_ID)).to.be.equal(true);
    // });
  });
});