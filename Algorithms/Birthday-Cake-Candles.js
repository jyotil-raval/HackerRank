/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
	let count = 0;
	let heights = 0;
	candles.forEach((element) => {
		if (element == heights) {
			++count;
		} else if (element > heights) {
			heights = element;
			count = 1;
		}
	});
	// console.log('birthdayCakeCandles -> count', count);
	return count;
}

birthdayCakeCandles([3, 2, 1, 3]);
