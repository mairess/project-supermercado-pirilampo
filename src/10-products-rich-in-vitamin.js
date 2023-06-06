const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  let newInfos = [];
  let vitInfos = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].nutritionalInfo.vitamins) {
      let description = stockProducts[index].description;
      let price = stockProducts[index].price;
      let formattedPrice = `R$ ${price}`;
      let vitamArray = stockProducts[index].nutritionalInfo.vitamins;
      vitInfos.push(stockProducts[index].nutritionalInfo.vitamins);
      let vitaminsInformation = [];
      for ( let vitamin in vitamArray) {
        if (Object.prototype.hasOwnProperty.call(vitamArray, vitamin)) {
          let value = vitamArray[vitamin];
        vitaminsInformation.push(`${vitamin} - ${value}`)
        }
      }
      newInfos.push({ description, formattedPrice, vitaminsInformation });
    }
  }
  return newInfos;
};

console.log(getProductsRichInVitamin());

module.exports = { getProductsRichInVitamin };
