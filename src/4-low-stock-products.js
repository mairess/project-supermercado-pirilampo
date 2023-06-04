const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  const results = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock > 0 && stockProducts[index].quantityInStock <= 10) {
      let name = stockProducts[index].productName;
      let quantityProduct = stockProducts[index].quantityInStock;

      results.push(`${name}: ${quantityProduct} unidades`);
    }
  }
  return results;
};

getLowStockProducts();

module.exports = { getLowStockProducts };
