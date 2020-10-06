// 10_days_Statistics > Day_00_Mean_Median_Mode

function processData(input) {
	const [n, dataString] = input.split('\n');
	const dataArray = dataString.split(' ').map((x) => parseInt(x));

	const average = dataArray.reduce((a, b) => a + b, 0) / n;
	console.log(average.toFixed(1));

	const sortedArray = dataArray.sort((a, b) => a - b);
	const mean = (sortedArray[Math.floor(n / 2) - 1] + sortedArray[Math.floor(n / 2)]) / 2;
	console.log(mean.toFixed(1));

	let obj = {};
	sortedArray.forEach((x) => {
		obj[x] ? obj[x]++ : (obj[x] = 1);
	});
	let count = 0;
	let mode = 0;
	for (let keys in obj) {
		if (obj[keys] > count) {
			count = obj[keys];
			mode = keys;
		}
	}
	console.log(mode);
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function (input) {
	_input += input;
});

process.stdin.on('end', function () {
	processData(_input);
});
