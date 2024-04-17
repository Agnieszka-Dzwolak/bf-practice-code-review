/** .........
 * function that finds all the values shared between two arrays.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to include.
 * @returns {Array} Returns the new array of filtered values.
 */

export const intersection = (array1, array2) => {
    const newArray = [];

    for (let i = 0; i < array1.length; i++) {
        const element = array1[i];

        for (let j = 0; j < array2.length; j++) {
            if (element === array2[j]) {
                newArray.push(element);
            }
        }
    }
    return newArray;
};

console.log(intersection([2, 1], [2, 3]));
console.log(intersection([2, 1, 2], [2, 3]));
