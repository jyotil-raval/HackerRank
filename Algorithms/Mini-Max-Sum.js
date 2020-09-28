function miniMaxSum(arr) {
	let minSum = 0;
	let maxSum = 0;
	arr.sort((a, b) => {
		if (a > b) return 1;
		else if (b > a) return -1;
		else return 0;
	});
	let arrLength = arr.length - 1;
	arr.forEach((el, idx) => {
		if (idx == 0) {
			maxSum += el;
		} else if (idx == arrLength) {
			minSum += el;
		} else {
			maxSum += el;
			minSum += el;
		}
	});
	console.log(maxSum, minSum);
}

miniMaxSum([1, 2, 3, 4, 5]);
