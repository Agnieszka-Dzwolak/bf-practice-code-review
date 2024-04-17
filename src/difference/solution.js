/** .........
 * remove specific values from an array. The values to remove are provided in the second array argument.
 *
 * @param {array} [array=[]] - The array to inspect
 * @param {array} [values=[]] - The values to exclude
 * @returns {array} Returns a new array of filtered values
 */

export const removeValues = (arrayToInspect, arrayValues) => {
    const newArray = [];

    for (let i = 0; i < arrayToInspect.length; i++) {
        const element = arrayToInspect[i];
        let shouldExclude = false;

        for (let j = 0; j < arrayValues.length; j++) {
            if (element === arrayValues[j]) {
                shouldExclude = true;
                break;
            }
        }
        if (!shouldExclude) {
            newArray.push(element);
        }
    }
    return newArray;
};

console.log(removeValues([2, 1], [2, 3]));
console.log(removeValues([1, 2, 1], [2, 3]));
