import { spellOutIntegerPrice, spellOutPrice } from './index.js';
describe('index.js', () =>{

    test('Test spellOutPrice method with number 0', ()=>{
        const result = spellOutPrice(0);
        expect(result).toEqual('zero złotych zero groszy');
    });

    test('Test spellOutPrice method with number 0.13', ()=>{
        const result = spellOutPrice(0.13);
        expect(result).toEqual('zero złotych trzynaście groszy');
    });
    test('Test spellOutPrice method with number 17', ()=>{
        const result = spellOutPrice(17);
        expect(result).toEqual('siedemnaście złotych zero groszy');
    });

    test('Test spellOutPrice method with number 48.26', ()=>{
        const result = spellOutPrice(48.26);
        expect(result).toEqual('czterdzieści osiem złotych dwadzieścia sześć groszy');
    });

    test('Test spellOutIntegerPrice method with numbers 0, 0', ()=>{
        const result = spellOutIntegerPrice(0, 0);
        expect(result).toEqual('zero złotych zero groszy');
    });

    test('Test spellOutIntegerPrice method with numbers 0, 13', ()=>{
        const result = spellOutIntegerPrice(0, 13);
        expect(result).toEqual('zero złotych trzynaście groszy');
    });
    test('Test spellOutIntegerPrice method with numbers 17, 0', ()=>{
        const result = spellOutIntegerPrice(17, 0);
        expect(result).toEqual('siedemnaście złotych zero groszy');
    });

    test('Test spellOutIntegerPrice method with numbers 48, 26', ()=>{
        const result = spellOutIntegerPrice(48,26);
        expect(result).toEqual('czterdzieści osiem złotych dwadzieścia sześć groszy');
    });

    test('Test spellOutPrice method with number 1032.11)', ()=>{
        const result = spellOutPrice(1032.11);
        expect(result).toEqual('jeden tysiąc trzydzieści dwa złote jedenaście groszy');
    });

    test('Test spellOutPrice method with number 1110.59', ()=>{
        const result = spellOutPrice(1110.59);
        expect(result).toEqual('jeden tysiąc sto dziesięć złotych pięćdziesiąt dziewięć groszy');
    });

    test('Test spellOutPrice method with number 1071.35', ()=>{
        const result = spellOutPrice(1071.35);
        expect(result).toEqual('jeden tysiąc siedemdziesiąt jeden złotych trzydzieści pięć groszy');
    });
});