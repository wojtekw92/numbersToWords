import { spellOut } from './numberConverter.js'

describe('numberConverter.js', () =>{

    test('Test spellOut method with numbert 0', ()=>{
        const result = spellOut(0);
        expect(result).toEqual('zero');
    });

    test('Test spellOut method with numbert 1', ()=>{
        const result = spellOut(1);
        expect(result).toEqual('jeden');
    });

    test('Test spellOut method with numbert 15', ()=>{
        const result = spellOut(15);
        expect(result).toEqual('piętnaście');
    });

    test('Test spellOut method with numbert 48', ()=>{
        const result = spellOut(48);
        expect(result).toEqual('czterdzieści osiem');
    });

    test('Test spellOut method with numbert 112', ()=>{
        const result = spellOut(112);
        expect(result).toEqual('sto dwanaście');
    });

    test('Test spellOut method with numbert 987', ()=>{
        const result = spellOut(987);
        expect(result).toEqual('dziewięćset osiemdziesiąt siedem');
    });

    test('Test spellOut method with numbert 2219', ()=>{
        const result = spellOut(2219);
        expect(result).toEqual('dwa tysiące dwieście dziewiętnaście');
    });

    test('Test spellOut method with numbert 78346', ()=>{
        const result = spellOut(78346);
        expect(result).toEqual('siedemdziesiąt osiem tysięcy trzysta czterdzieści sześć');
    });

    test('Test spellOut method with numbert 891456', ()=>{
        const result = spellOut(891456);
        expect(result).toEqual('osiemset dziewięćdziesiąt jeden tysięcy czterysta pięćdziesiąt sześć');
    });

    test('Test spellOut method with numbert 1808271', ()=>{
        const result = spellOut(1808271);
        expect(result).toEqual('jeden milion osiemset osiem tysięcy dwieście siedemdziesiąt jeden');
    });

    test('Test spellOut method with numbert 47291237', ()=>{
        const result = spellOut(47291237);
        expect(result).toEqual('czterdzieści siedem milionów dwieście dziewięćdziesiąt jeden tysięcy dwieście trzydzieści siedem');
    });

});