const sinon = require('sinon');
const { expect } = require('chai');
const { NewError } = require('../../../helpers');

const services = require('../../../services');
const controllers = require('../../../controllers');

describe('Testa a função "getProductById" da camada controllers', () => {
  const payloadProducts = {
      id: 2,
      name: 'Traje de encolhimento',
    };

  describe('quando o retorno é bem sucedido', () => {
    const res = {};
    const req = {
      params: 2,
    };

    before(async () => {
      req.body = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(services.product, 'getProductById').resolves(payloadProducts);
    });

    after(async () => {
      services.product.getProductById.restore();
    });

    it('é chamado o status com o códico 200', async () => {
      await controllers.product.getProductById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('retorn um array de objetos com "id" e "name" do produto', async () => {
      await services.product.getProductById(req, res);
      expect(res.json.calledWith(payloadProducts)).to.be.equal(true);
    });

  });

  describe('quando o retorno é mal sucedido', () => {
    const res = {};
    const req = {
      params: 2,
    };
    const next = sinon.spy();

    const error = new NewError('Erro de teste!', 500);

    before(async () => {
      req.body = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(services.product, 'getProductById').throws(error);
    });

    after(async () => {
      services.product.getProductById.restore();
    });

    it('verifica se o erro é lançado e capturado corretamente pelo next', async () => {
      await controllers.product.getProductById(req, res, next);

      expect(next.calledWith(error)).to.be.equal(true);
    });
  });
});