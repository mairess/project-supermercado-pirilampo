const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let stockQuantity = 0;
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock > 0) {
      stockQuantity += stockProducts[index].quantityInStock;
    }
  }
  return stockQuantity;
};

getProductsAmount();

module.exports = { getProductsAmount };
