// 10_Days_Statistics > Day_01_Standard_Deviation
const getMU = (array, n) => {
	let mu_x = array.reduce((result, element) => {
		result += element;
		return result;
	}, 0);
	return mu_x / n;
};

const getSigmaNSquare = (array, mu) => {
	return array.reduce((result, element) => {
		result += (element - mu) * (element - mu);
		return result;
	}, 0);
};

const processData = (input) => {
	const [N, x_str] = input.split('\n');
	const X = x_str.split(' ').map((el) => parseInt(el));

	const MU = getMU(X, N);

	const SIGMA_N_SQUARE = getSigmaNSquare(X, MU);

	const FINAL_PRODUCT = Math.sqrt(SIGMA_N_SQUARE / N).toFixed(1);
	console.log(FINAL_PRODUCT);
};

processData(`5
10 40 30 50 20`);
