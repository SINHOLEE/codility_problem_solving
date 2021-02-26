// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	A.sort((a, b) => a - b);
	let currentNum = 1;
	for (let i = 0; i < A.length; i++) {
		if (A[i] !== currentNum) {
			return 0;
		}
		currentNum++;
	}

	return 1;
	// write your code in JavaScript (Node.js 8.9.4)
}
