// 30_Days_Code > Day_03_Intro_Conditional_Statements
function main() {
	const N = parseInt(readLine(), 10);
	if (N % 2 === 1 || (N > 5 && N <= 20)) {
		console.log('Weird');
	} else {
		console.log('Not Weird');
	}
}
