// 30_Days_Code > Day_05_Loop

const prepare_table = (number) => {
	for (let idx = 1; idx <= 10; idx++) {
		console.log(`${number} x ${idx} = ${number * idx}`);
	}
};

function main() {
	const n = parseInt(readLine(), 10);
	prepare_table(n);
}
