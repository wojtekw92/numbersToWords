/**
 * Function that convert number to it word representation.
 * @function
 * @param {number} number The number to convert.
 * @returns {string} word represntation of provided nuaber.
 */
export function numberToWords(number)
{
    number = Math.abs(number);
    const unity = [
        "",
        " jeden",
        " dwa",
        " trzy",
        " cztery",
        " pięć",
        " sześć",
        " siedem",
        " osiem", 
        " dziewięć"];
    const teen = [
        "",
        " jedenaście",
        " dwanaście",
        " trzynaście",
        " czternaście",
        " piętnaście",
        " szesnaście",
        " siedemnaście",
        " osiemnaście",
        " dziewietnaście"];
    const tens = [
        "",
        " dziesięć",
        " dwadzieścia",
        " trzydzieści",
        " czterdzieści",
        " pięćdziesiąt",
        " sześćdziesiąt",
        " siedemdziesiąt",
        " osiemdziesiąt",
        " dziewięćdziesiąt"];
    const hundreds = [
        "",
        " sto",
        " dwieście",
        " trzysta",
        " czterysta",
        " pięćset",
        " sześćset",
        " siedemset",
        " osiemset",
        " dziewięćset"];
    const groups = [
        ["" ,"" ,""],
        [" tysiąc" ," tysiące" ," tysięcy"],
        [" milion" ," miliony" ," milionów"],
        [" miliard"," miliardy"," miliardów"],
        [" bilion" ," biliony" ," bilionów"],
        [" biliard"," biliardy"," biliardów"],
        [" trylion"," tryliony"," trylionów"]];


    let outputString = number === 0 ? 'zero' : '';
    let orderOfMagnitude = 0;
    while (number > 0) {
        let hundredsIndex = Math.floor((number % 1000)/100);
        let teenIndex = 0;
        let tensIndex = Math.floor((number % 100)/10);
        let unityIndex = Math.floor(number % 10);
        let k = 2;

        if ( tensIndex == 1 && unityIndex > 0 ) {
            teenIndex = unityIndex;
            tensIndex = 0;
            unityIndex = 0;
        }

        if ( unityIndex == 1 && (hundredsIndex + tensIndex + teenIndex) == 0 ) {
            k = 0;
        } else if (unityIndex == 2 || unityIndex == 3 || unityIndex == 4) {
            k = 1;
        }

        if ( hundredsIndex > 0 || tensIndex > 0 ||
            teenIndex > 0 || unityIndex > 0 ) {
            let temporaryString = '';
            temporaryString += hundreds[hundredsIndex];
            temporaryString += tens[tensIndex];
            temporaryString += teen[teenIndex];
            temporaryString += unity[unityIndex];
            temporaryString += groups[orderOfMagnitude][k];
            outputString = temporaryString + outputString;
        }

        orderOfMagnitude++;
        number = ~~(number/1000);
    }
    return outputString.trim();
}