# numbersToWords
Simple npm library to convert numbers to written form in polish language.

this snippet:
```
console.log('78346: ' + numberToWords(78346));
```
will provide this output:
```
78346: siedemdziesiąt osiem tysięcy trzysta czterdzieści sześć
```


Library supports also currencies:
The snippet below:
```
console.log('47 291 237,31 ' + convertIntPriceToWords(47291237,31));
console.log('47 291 237,31 ' + convertPriceToWords(47291237.31));
```
will give this output:
```
47 291 237,31 czterdzieści siedem milionów dwieście dziewięćdziesiąt jeden tysięcy dwieście trzydzieści siedemzłotych i trzydzieści jeden groszy
47 291 237,31 czterdzieści siedem milionów dwieście dziewięćdziesiąt jeden tysięcy dwieście trzydzieści siedemzłotych i trzydzieści jeden groszy
```

## Local Run:
```
npm rub build
node tmp-testing.js
```


# PL
Prosta biblioteka do konwersji liczb i kwot na zapis tekstowy



# TODO:
[ ] Write tests.
[ ] Add types.
[ ] Publish on NPM.