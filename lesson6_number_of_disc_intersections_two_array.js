// n^2밖에 생각을 못하겠어...
// 이거 걔랑 비슷하네

function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)
	const lower = [];
	const upper = [];
	let cnt = 0;
	for (let i = 0; i < A.length; i++) {
		const aStart = i - A[i];
		const aEnd = i + A[i];
		lower.push(aStart);
		upper.push(aEnd);
	}
	lower.sort((a, b) => {
		return a - b;
	});
	upper.sort((a, b) => {
		return a - b;
	});
	let discCnt = 0;
	let upperIndex = 0;
	for (let i = 0; i < A.length; i++) {
		while (lower[i] > upper[upperIndex]) {
			discCnt--;
			upperIndex++;
		}
		if (discCnt) {
			cnt += discCnt;
		}
		discCnt++;
	}
	return cnt > 10000000 ? -1 : cnt;
}
console.log(solution([1, 5, 2, 1, 4, 0]));
console.log(solution([1, 1, 1]));
