// MOCKS TO registerSales

const PAYLOAD_RECEIVED_SALES = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const PAYLOAD_RETURN_SALES = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

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
  },
];

const PAYLOAD_QUANTITY_ZERO = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 0,
  },
];

const PL_SALES_WRONG_PRODUCT_ID = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 4,
    quantity: 5,
  },
];

module.exports = {
  PAYLOAD_RECEIVED_SALES,
  PAYLOAD_RETURN_SALES,
  PAYLOAD_WITHOUT_PRODUCT_ID,
  PAYLOAD_WITHOUT_QUANTITY,
  PAYLOAD_QUANTITY_ZERO,
  PL_SALES_WRONG_PRODUCT_ID,
};