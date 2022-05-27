
// import { spellOut, spellOutIntegerPrice, spellOutPrice } from './src/index.js'
import { spellOut, spellOutIntegerPrice, spellOutPrice } from './dist/index.js'
console.log('1: ' + spellOut(1));
console.log('15: ' + spellOut(15));
console.log('48: ' + spellOut(48));
console.log('112: ' + spellOut(112));
console.log('987: ' + spellOut(987));
console.log('2219: ' + spellOut(2219));
console.log('78346: ' + spellOut(78346));
console.log('891456: ' + spellOut(891456));
console.log('1808271 ' + spellOut(1808271));
console.log('47291237 ' + spellOut(47291237));

console.log('1: ' + spellOutIntegerPrice(1, 0));
console.log('14,17: ' + spellOutIntegerPrice(14, 17));
console.log('15,2: ' + spellOutIntegerPrice(15, 2));
console.log('42,27: ' + spellOutIntegerPrice(42, 27));
console.log('48,15: ' + spellOutIntegerPrice(48, 15));
console.log('112,15: ' + spellOutIntegerPrice(112, 15));
console.log('987,13: ' + spellOutIntegerPrice(987,13));
console.log('2219,8: ' + spellOutIntegerPrice(2219, 8));
console.log('78346,47: ' + spellOutIntegerPrice(78346, 47));
console.log('891456,69: ' + spellOutIntegerPrice(891456, 69));
console.log('1808271,80: ' + spellOutIntegerPrice(1808271, 80));
console.log('47 291 237,31 ' + spellOutIntegerPrice(47291237,31));

console.log('47 291 237,31 ' + spellOutPrice(47291237.31));
