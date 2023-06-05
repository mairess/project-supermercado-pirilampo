const stockProducts = require('./data.json');

let newInfos = null;
const searchProductByName = (product) => {
  if (!product) {
    return null;
  }
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (product === stockProducts[index].productName) {
      let description = stockProducts[index].description;
      let price = stockProducts[index].price;
      let formattedPrice = `R$ ${price}`;
      newInfos = { description, formattedPrice };
      return newInfos;
    }
  }
  return null;
};

searchProductByName();

module.exports = { searchProductByName };
