function solve(meal_cost, tip_percent, tax_percent) {
	const tip = (meal_cost * tip_percent) / 100;
	const tax = (meal_cost * tax_percent) / 100;

	console.log(Math.round(meal_cost + tip + tax));
}

function main() {
	const meal_cost = parseFloat(readLine());
	const tip_percent = parseInt(readLine(), 10);
	const tax_percent = parseInt(readLine(), 10);

	solve(meal_cost, tip_percent, tax_percent);
}
