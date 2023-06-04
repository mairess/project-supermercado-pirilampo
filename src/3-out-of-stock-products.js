const stockProducts = require('./data.json');

const getOutOfStockProducts = (data) => {
  const results = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock === 0) {
      results.push(stockProducts[index].productName);
    }
  }
  return results;
};

getOutOfStockProducts();

module.exports = { getOutOfStockProducts };
