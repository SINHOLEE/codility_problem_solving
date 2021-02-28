// n^2밖에 생각을 못하겠어...

function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)
	const arr = [];
	let cnt = 0;
	for (let i = 0; i < A.length; i++) {
		const aStart = i - A[i];
		const aEnd = i + A[i];
		arr.push({ isLower: true, value: aStart });
		arr.push({ isLower: false, value: aEnd });
	}
	arr.sort((a, b) => {
		if (a.value === b.value) {
			return a.isLower ? -1 : 1;
		}
		return a.value - b.value;
	});
	let discCnt = 0;
	for (let i = 0; i < arr.length; i++) {
		const { isLower, value } = arr[i];

		if (isLower) {
			if (discCnt) {
				cnt += discCnt;
			}
			discCnt++;
		} else {
			discCnt--;
		}
	}
	return cnt > 10000000 ? -1 : cnt;
}
console.log(solution([1, 1, 1]));
