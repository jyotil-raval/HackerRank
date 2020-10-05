function countingValleys(steps, path) {
	let elev = 0;
	path = path.split('');
	return path.reduce((result, slop) => {
		slop == 'U' ? elev++ : elev--;
		if (elev == 0 && slop == 'U') {
			result++;
		}
		return result;
	}, 0);
}
