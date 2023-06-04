const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  const results = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    results.push(Object.values(stockProducts[index].productName).join(''));
  }
  return results;
};

getUniqueProductsName();

module.exports = { getUniqueProductsName };
