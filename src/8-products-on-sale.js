const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  let newInfos = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].onSale) {
      let description = stockProducts[index].description;
      let price = stockProducts[index].price;
      let onSale = stockProducts[index].onSale;
      let formattedPrice = `R$ ${price}`;
      newInfos.push({ description, formattedPrice, onSale });
    }
  }
  return newInfos;
};

getProductsOnSale();

module.exports = { getProductsOnSale };
