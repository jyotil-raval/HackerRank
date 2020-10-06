/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
	const max = Math.max(...candles);
	let frequency = 0;
	for (let i = 0; i < candles.length; i++) {
		if (ar[i] === max) {
			frequency++;
		}
	}
	return frequency;
}

birthdayCakeCandles([3, 2, 1, 3]);
