// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	A.sort((a, b) => a - b);
	let target = 1;
	for (let i = 0; i < A.length; i++) {
		const num = A[i];
		if (num <= 0) continue;
		if (target === num) {
			target += 1;
		} else if (target > num) {
			continue;
		} else {
			break;
		}
	}
	return target;
	// write your code in JavaScript (Node.js 8.9.4)
}
