// 10_Days_Statistics > Day_00_Weighted_Mean
function processData(input) {
	let N = 0;
	let x_str = '';
	let w_str = '';
	let Weighted_Mean = 0;
	let part = 0;
	let tease = 0;

	[N, x_str, w_str] = input.split('\n');

	let x = x_str.split(' ');
	let w = w_str.split(' ');

	x = x.map((el) => {
		return parseInt(el);
	});
	w = w.map((el) => {
		return parseInt(el);
	});

	for (let index = 0; index < N; index++) {
		part += x[index] * w[index];
		tease += w[index];
	}
	Weighted_Mean = part / tease;
	Weighted_Mean = Weighted_Mean.toFixed(1);
	console.log(Weighted_Mean);
}
