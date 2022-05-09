/**
 * Function that provides currency name with proper declination based on value.
 * @function
 * @param {number} price price int value
 * @returns {string} currency name with proper declination.
 */
export function generateCurrencyName(price) {
    const currencyName = ['złoty', 'złote', 'złotych'];

    if ( price%10 == 1 && price < 10 ) {
        return currencyName[0]
    } else if ((price%10 == 2 || price%10 == 3 || price%10 == 4) && 
        price != 12 && price != 13 && price != 14 ) {
        return currencyName[1]
    } else {
        return currencyName[2]
    }
}

/**
 * Function that provides currency name for pennys with proper declination based on value.
 * Function returns declination with assumption that will be part of full price number ie.
 * X złotych i Y groszy.
 * @function
 * @param {number} penny penny value
 * @returns {string} penny name with proper declination.
 */
export function generatePennyName(penny) {
    const pennyName = ['grosz', 'grosze', 'groszy'];

    if ( penny%10 == 1 && penny < 10 ) {
        return pennyName[0]
    } else if ((penny%10 == 2 || penny%10 == 3 || penny%10 == 4) && 
    penny != 12 && penny != 13 && penny != 14 ) {
        return pennyName[1]
    } else {
        return pennyName[2]
    }
}