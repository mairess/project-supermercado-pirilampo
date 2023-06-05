const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  let newInfos = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].allergyOrIntolerance) {
      let description = stockProducts[index].description;
      let price = stockProducts[index].price;
      let formattedPrice = `R$ ${price}`;
      let allergyArray = stockProducts[index].allergyOrIntolerance;
      let allergyArrayConvert = allergyArray.toString().replaceAll(',', ' ');
      let message = 'Pode conter: ';
      let allergyOrIntoleranceMessage = message + allergyArrayConvert;
      newInfos.push({ description, formattedPrice, allergyOrIntoleranceMessage });
    }
  }
  return newInfos;
};

getProductsWithAllergyOrIntoleranceInfo();

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
