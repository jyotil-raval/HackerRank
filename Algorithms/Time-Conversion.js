/*
 * Complete the timeConversion function below.
 */
function timeConversion(time) {
	if (time.includes('PM')) {
		time = time.split('PM')[0];
		let timeArr = time.split(':');
		if (timeArr[0] != 12) {
			timeArr[0] = parseInt(timeArr[0]) + 12;
		}
		time = timeArr.join(':');
	} else if (time.includes('AM')) {
		time = time.split('AM')[0];
		let timeArr = time.split(':');
		if (timeArr[0] == 12) {
			timeArr[0] = '00';
		}
		time = timeArr.join(':');
	}
	// console.log('timeConversion -> time', time);
	return time;
}

timeConversion('12:40:22PM');
