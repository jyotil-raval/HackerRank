// Sample Input:
// 6

// Sample Output:
//      #
//     ##
//    ###
//   ####
//  #####
// ######

function staircase(n) {
	for (let i = 1; i <= n; i++) {
		console.log(' '.repeat(n - i) + '#'.repeat(i));
	}
}

staircase(4);
