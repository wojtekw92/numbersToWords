import { getCurrencyName, getPennyName } from './currencyUnit.js';

describe('currencyUnit.js', () =>{

    test('Test getCurrencyName method with numbert 0', ()=>{
        const result = getCurrencyName(0);
        expect(result).toEqual('złotych');
    });
    test('Test getCurrencyName method with numbert 1', ()=>{
        const result = getCurrencyName(1);
        expect(result).toEqual('złoty');
    });
    test('Test getCurrencyName method with numbert 2', ()=>{
        const result = getCurrencyName(2);
        expect(result).toEqual('złote');
    });
    test('Test getCurrencyName method with numbert 3', ()=>{
        const result = getCurrencyName(3);
        expect(result).toEqual('złote');
    });
    test('Test getCurrencyName method with numbert 4', ()=>{
        const result = getCurrencyName(4);
        expect(result).toEqual('złote');
    });
    test('Test getCurrencyName method with numbert 5', ()=>{
        const result = getCurrencyName(5);
        expect(result).toEqual('złotych');
    });
    test('Test getCurrencyName method with numbert 6', ()=>{
        const result = getCurrencyName(6);
        expect(result).toEqual('złotych');
    });
    test('Test getCurrencyName method with numbert 11', ()=>{
        const result = getCurrencyName(11);
        expect(result).toEqual('złotych');
    });
    test('Test getCurrencyName method with numbert 12', ()=>{
        const result = getCurrencyName(12);
        expect(result).toEqual('złotych');
    });
    test('Test getCurrencyName method with numbert 17', ()=>{
        const result = getCurrencyName(17);
        expect(result).toEqual('złotych');
    });

    test('Test getCurrencyName method with numbert 26', ()=>{
        const result = getCurrencyName(26);
        expect(result).toEqual('złotych');
    });
    test('Test getCurrencyName method with numbert 33', ()=>{
        const result = getCurrencyName(33);
        expect(result).toEqual('złote');
    });
    test('Test getCurrencyName method with numbert 89', ()=>{
        const result = getCurrencyName(89);
        expect(result).toEqual('złotych');
    });
});

//Add pennys