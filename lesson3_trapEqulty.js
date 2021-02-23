function solution(A) {
	let rightTotal = A.reduce((prev, acc) => prev + acc, 0);
	let leftTotal = 0;
	let res = 100000 * 100000;
	for (let i = 0; i < A.length - 1; i++) {
		leftTotal += A[i];
		rightTotal -= A[i];
		res = Math.min(res, Math.abs(leftTotal - rightTotal));
	}
	return res;

	// write your code in JavaScript (Node.js 8.9.4)
}

console.log(solution([2, 3, 9, 5])); // 9
console.log(solution([3, 1, 2, 4, 3])); // 1
