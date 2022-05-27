const pluralRules = {
    one: 0,
    few: 1,
    many: 2,
};

/**
 * Function that provides currency name with proper declination based on value.
 * @function
 * @param {number} price price int value
 * @returns {string} currency name with proper declination.
 */
export function getCurrencyName(price) {
    const currencyName = ['złoty', 'złote', 'złotych'];
    return currencyName[pluralRules[new Intl.PluralRules('pl-PL').select(price)]]
}

/**
 * Function that provides currency name for pennys with proper declination based on value.
 * Function returns declination with assumption that will be part of full price number ie.
 * X złotych i Y groszy.
 * @function
 * @param {number} penny penny value
 * @returns {string} penny name with proper declination.
 */
export function getPennyName(penny) {
    const pennyName = ['grosz', 'grosze', 'groszy'];
    return pennyName[pluralRules[new Intl.PluralRules('pl-PL').select(penny)]]
}