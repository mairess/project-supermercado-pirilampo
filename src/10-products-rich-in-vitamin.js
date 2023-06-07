const stockProducts = require('./data.json');

const getVit = (vitaminsObject) => {
  let vitArray = [];
  for (let vitamin in vitaminsObject) {
    if (Object.prototype.hasOwnProperty.call(vitaminsObject, vitamin)) {
      let value = vitaminsObject[vitamin];
      vitArray.push(`${vitamin} - ${value}`);
    }
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
    let vitaminsInformation = getVit(vitamins);

    if (vitamins) {
      getVit();
      newInfos.push({ description, formattedPrice, vitaminsInformation });
    }
  }
  return newInfos;
};

console.log(getProductsRichInVitamin());

module.exports = { getProductsRichInVitamin };
