const stockProducts = require('./data.json');

const getVit = (vitaminsArray) => {
  let vitArray = [];
  for (let indexGetVit = 0; indexGetVit < vitaminsArray.length; indexGetVit += 1) {
    vitArray.push(vitaminsArray[indexGetVit].join(' - '));
  }
  return vitArray;
};

const getProductsRichInVitamin = () => {
  let newInfos = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    let product = stockProducts[index];
    let description = product.description;
    let price = product.price;
    let formattedPrice = `R$ ${price}`;
    let vitamins = product.nutritionalInfo.vitamins;

    if (vitamins) {
      let vitaminsArray = Object.entries(product.nutritionalInfo.vitamins);
      let vitaminsInformation = getVit(vitaminsArray);
      newInfos.push({ description, formattedPrice, vitaminsInformation });
    }
  }
  return newInfos;
};

getProductsRichInVitamin();

module.exports = { getProductsRichInVitamin };
