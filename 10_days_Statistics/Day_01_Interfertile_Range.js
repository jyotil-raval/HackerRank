// 10_Days_Statistics > Day_01_Interfertile_Range

const getMedian = (arr, start, end) => {
	let median = 0;
	const size = end - start + 1;
	if (size % 2 == 0) {
		median = (arr[start + size / 2 - 1] + arr[start + size / 2]) / 2;
	} else {
		median = arr[start + (size - 1) / 2];
	}
	return median;
};

const processData = (input) => {
	const [N, x_str, f_str] = input.split('\n');
	const F = f_str.split(' ').map((el) => parseInt(el));
	const X = x_str.split(' ').map((el) => parseInt(el));

	let data_set = [];

	for (let index = 0; index < N; index++) {
		for (let idx = 0; idx < F[index]; idx++) {
			data_set.push(X[index]);
		}
	}

	data_set = data_set.sort((a, b) => a - b);
	const data_set_length = data_set.length;

	const Q1 = getMedian(data_set, 0, Math.floor(data_set_length / 2) - 1);
	let Q2 = 0;

	if (data_set_length % 2 == 0) {
		Q2 = getMedian(data_set, Math.floor(data_set_length / 2), data_set_length - 1);
	} else {
		Q2 = getMedian(data_set, Math.floor(data_set_length / 2) + 1, data_set_length - 1);
	}

	console.log((Q2 - Q1).toFixed(1));
};

processData(`5
10 40 30 50 20
1 2 3 4 5`);

processData(`10
10 40 30 50 20 10 40 30 50 20
1 2 3 4 5 6 7 8 9 10`);

processData(`6
6 12 8 10 20 16
5 4 3 2 1 5`);
