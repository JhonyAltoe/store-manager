const sinon = require('sinon');
const { expect } = require('chai');
const { NewError } = require('../../../helpers');

const services = require('../../../services');
const controllers = require('../../../controllers');

describe('Testa a função "registerProduct" da camada controllers', () => {

  describe('quando o retorno é bem sucedido', () => {
    const res = {
      json: (param) => param,
      status: () => ({ json: (param) => param, send: () => null }),
    };

    const req = {};

    const PAYLOAD_PRODUCT_RESPONSE = {
      name: 'ProdutoX',
      id: 4,
    };

    before(async () => {
      req.body = {
        name: 'ProdutoX'
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(services.product, 'registerProduct').resolves(PAYLOAD_PRODUCT_RESPONSE);
    });

    after(async () => {
      services.product.registerProduct.restore();
    });

    it('testa se é uma função', () => {
      expect(controllers.product.registerProduct).to.be.a('function');
    })
    
    it('é chamado o status com o códico 201', async () => {
      await controllers.product.registerProduct(req, res);
      expect(res.status.calledWith(201)).to.be.equal(true);
    });

    it('recebe o produto e deve retornar o produto cadastrado', async () => {
      await services.product.registerProduct(req, res);
      expect(res.json.calledWith(PAYLOAD_PRODUCT_RESPONSE)).to.be.equal(true);
    });

  });

  describe('quando o retorno é mal sucedido', () => {
    const res = {
      json: (param) => param,
      status: () => ({ json: (param) => param, send: () => null }),
    };

    const req = {};
    const next = sinon.spy();

    const error = new NewError('Erro de teste!', 500);

    before(async () => {
      req.body = {
        name: 'ProdutoX'
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(services.product, 'registerProduct').throws(error);
    });

    after(async () => {
      services.product.registerProduct.restore();
    });

    it('verifica se o erro é lançado e capturado corretamente pelo next', async () => {
      await controllers.product.registerProduct(req, res, next);

      expect(next.calledWith(error)).to.be.equal(true);
    });
  });
});