function performOperation(secondInteger, secondDecimal, secondString) {
	const firstInteger = 4;
	const firstDecimal = 4.0;
	const firstString = 'HackerRank ';

	console.log(firstInteger + Number(secondInteger));

	const firstNum = Number(firstDecimal).toFixed(2);
	const secondNum = Number(secondDecimal).toFixed(2);
	const answer = Number(firstNum) + Number(secondNum);

	console.log(answer);
	console.log(firstString + secondString);
}
