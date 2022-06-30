const { expect } = require('chai');

const connection = () => [];
const models = {
  product: {
    getProductById: () => ({}),
  },
};

describe('Testa a função getProductById da camada models', () => {
  const paydoadProduct = {
    id: 2,
    name: 'Traje de encolhimento',
  };

  describe('em caso de sucesso', () => {
    // const ID = 2;

    const response = models.product.getProductById();
    expect(response).to.be.a('object');
  });
});