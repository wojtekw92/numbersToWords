import { numberToWords } from './numberConverter.js'
import { generateCurrencyName, generatePennyName } from './currencyUnit.js';

function convertIntPriceToWords(price, cents) {
    let output = numberToWords(price);
    output += generateCurrencyName(price);
    output += ' i ' + numberToWords(cents);
    output += ' ' + generatePennyName(cents);
    return output;
}

function convertPriceToWords(price) {
    const intPrice = Math.floor(price*100);
    return convertIntPriceToWords(Math.floor(intPrice/100), intPrice%100);
}


export {
    numberToWords,
    convertIntPriceToWords,
    convertPriceToWords,
}