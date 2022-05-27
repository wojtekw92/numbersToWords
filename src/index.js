import { spellOut } from './numberConverter.js'
import { getCurrencyName, getPennyName } from './currencyUnit.js';

function spellOutIntegerPrice(price, cents) {
    let output = spellOut(price);
    output += ' ' + getCurrencyName(price);
    output += ' i ' + spellOut(cents);
    output += ' ' + getPennyName(cents);
    return output;
}

function spellOutPrice(price) {
    const intPrice = Math.floor(price*100);
    return spellOutIntegerPrice(Math.floor(intPrice/100), intPrice%100);
}


export {
    spellOut,
    spellOutIntegerPrice,
    spellOutPrice,
}