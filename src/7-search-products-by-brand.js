const stockProducts = require('./data.json');

const searchProductsByBrand = (brand) => {
  let newInfos = [];
  if (!brand) {
    return newInfos;
  }
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (brand === stockProducts[index].brand) {
      let description = stockProducts[index].description;
      let price = stockProducts[index].price;
      let formattedPrice = `R$ ${price}`;
      newInfos.push({ description, formattedPrice });
    }
  }
  return newInfos;
};

searchProductsByBrand();

module.exports = { searchProductsByBrand };
