const prepare_table = (number) => {
	for (let i = 1; i <= 10; i++) {
		console.log(`${number} x ${i} = ${number * i}`);
	}
};

function main() {
	const n = parseInt(readLine(), 10);
	prepare_table(n);
}
