
// import { numberToWords, convertIntPriceToWords, convertPriceToWords } from './src/index.js'
import { numberToWords, convertIntPriceToWords, convertPriceToWords } from './dist/index.js'

console.log('1: ' + numberToWords(1));
console.log('15: ' + numberToWords(15));
console.log('48: ' + numberToWords(48));
console.log('987: ' + numberToWords(987));
console.log('2219: ' + numberToWords(2219));
console.log('78346: ' + numberToWords(78346));
console.log('891456: ' + numberToWords(891456));
console.log('1808271 ' + numberToWords(1808271));
console.log('47291237 ' + numberToWords(47291237));

console.log('1: ' + convertIntPriceToWords(1, 0));
console.log('14,17: ' + convertIntPriceToWords(14, 17));
console.log('15,2: ' + convertIntPriceToWords(15, 2));
console.log('42,27: ' + convertIntPriceToWords(42, 27));
console.log('48,15: ' + convertIntPriceToWords(48, 15));
console.log('987,13: ' + convertIntPriceToWords(987,13));
console.log('2219,8: ' + convertIntPriceToWords(2219, 8));
console.log('78346,47: ' + convertIntPriceToWords(78346, 47));
console.log('891456,69: ' + convertIntPriceToWords(891456, 69));
console.log('1808271,80: ' + convertIntPriceToWords(1808271, 80));
console.log('47 291 237,31 ' + convertIntPriceToWords(47291237,31));

console.log('47 291 237,31 ' + convertPriceToWords(47291237.31));
