function solution(A) {
	// 0부터 n-1까지 더한 값을 저장
	let minAvg = (A[0] + A[1]) / 2;
	let minIndex = 0;
	for (let i = 2; i < A.length; i++) {
		let avg = (A[i - 2] + A[i - 1] + A[i]) / 3;
		if (minAvg > avg) {
			minAvg = avg;
			minIndex = i - 2;
		}
		avg = (A[i - 1] + A[i]) / 2;
		if (minAvg > avg) {
			minAvg = avg;
			minIndex = i - 1;
		}
	}
	return minIndex;
}
console.log(solution([0, 10, 0, -12, 0, 4, 2, -1, -1, 5, 1, 5, 8]));
console.log(solution([4, 2, 2, 5, 1, 5, 8]));
console.log(solution([-3, -5, -8, -4, -10]));
