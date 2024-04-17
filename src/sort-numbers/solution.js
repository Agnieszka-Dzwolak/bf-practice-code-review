/**
 * Sorts an array of numbers from smallest to largest to largest.
 *
 * Returns a new array without modifying the original array.
 *
 * Does not need to support: NaN, Infinity, -Infinity.
 *
 * @param {number[]} [arrayOfNumbers=[]] - the array of numbers to sort
 * @returns {number[]} a new array with the same numbers, but sorted *
 */

const sortNumbers = (arrayOfNumbers) => {
    const resultArray = [...arrayOfNumbers];

    resultArray.sort(function (a, b) {
        return a - b;
    });

    return resultArray;
};
console.log(sortNumbers([1.5, 1, -1.5, 0, -1])); // -> [-1.5, -1, 0, 1, 1.5]
