/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
	return grades.map((grad) => {
		const REMINDER = grad % 5;
		const ADD_TO_GRAD = 5 - REMINDER;
		if (REMINDER >= 3) {
			let final_grad = grad + ADD_TO_GRAD;
			if (final_grad >= 40) {
				return final_grad;
			}
		}
		return grad;
	});
}
gradingStudents([84, 94, 21, 0, 18, 100, 18]);
