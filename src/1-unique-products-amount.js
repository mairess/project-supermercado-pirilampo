const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  let result = stockProducts.length;
  return result;
};

getUniqueProductsAmount();

module.exports = { getUniqueProductsAmount };
