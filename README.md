# spellOutPrice
Simple npm library to convert numbers to written form in polish language.

this snippet:
```
console.log('78346: ' + spellOut(78346));
```
will provide this output:
```
78346: siedemdziesiąt osiem tysięcy trzysta czterdzieści sześć
```


Library supports also currencies:
The snippet below:
```
console.log('47 291 237,31 ' + spellOutIntegerPrice(47291237, 31));
console.log('47 291 237,31 ' + spellOutPrice(47291237.31));
```
will give this output:
```
47 291 237,31 czterdzieści siedem milionów dwieście dziewięćdziesiąt jeden tysięcy dwieście trzydzieści siedemzłotych i trzydzieści jeden groszy
47 291 237,31 czterdzieści siedem milionów dwieście dziewięćdziesiąt jeden tysięcy dwieście trzydzieści siedemzłotych i trzydzieści jeden groszy
```

## Instalation:
```
npm i spell-out-price
```
and you can import all functions:
```
import { spellOut, spellOutIntegerPrice, spellOutPrice } from 'spell-out-price';
```

## Local Run:
```
npm rub build
node tmp-testing.js
```


# PL
Prosta biblioteka do konwersji liczb i kwot na zapis tekstowy



# TODO:

- [x] Write tests.
- [ ] Add types.
- [ ] Publish on NPM.