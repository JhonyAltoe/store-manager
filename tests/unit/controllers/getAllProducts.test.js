const sinon = require('sinon');
const { expect } = require('chai');

const services = require('../../../services');
const controllers = require('../../../controllers');

describe('Testa a função "getAllProducts" da camada controllers', () => {
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

  describe('quando o retorno é bem sucedido', () => {
    const res = {};
    const req = {};

    before(async () => {
      const ARR_PRODUCTS = payloadProducts;
      req.body = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      sinon.stub(services.product, 'getAllProducts').resolves(ARR_PRODUCTS);
    });

    after(async () => {
      services.product.getAllProducts.restore();
    });

    it('é chamado o status com o códico 200', async () => {
      await controllers.product.getAllProducts(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('retorn um array de objetos com "id" e "name" dos produtos', async () => {
      await services.product.getAllProducts(req, res);
      expect(res.json.calledWith(payloadProducts)).to.be.equal(true);
    });

  });

  describe('quando o retorno é mal sucedido', () => {
    const res = {};
    const req = {};

    const error = { message: "Table 'StoreManager.product' doesn't exist", status: 500 };

    before(async () => {
      req.body = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(services.product, 'getAllProducts').throws(error);
    });

    after(async () => {
      services.product.getAllProducts.restore();
    });

    it('verifica se o erro é lançado e capturado corretamente', async () => {
      await controllers.product.getAllProducts(req, res);

      expect(res.json.calledWith({ message: error.message })).to.be.equal(true);
      expect(res.status.calledWith(error.status)).to.be.equal(true);
    })
  });
});
