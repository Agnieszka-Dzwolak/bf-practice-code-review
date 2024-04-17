/** .........
 * Sum of two numbers.
 *
 * @param {array} [array=[]] - The array to flatten
 * @returns {array} Return the new flatten array
 */

export const flattenArray = (array) => {
    return array.flat(Infinity);
};

console.log(flattenArray([1, [2, [3, [4]], 5]]));
console.log(flattenArray(['a', ['b', [['c'], ['d']], 'e']]));
