function solution(X, A) {
	let cntPassableBlocks = 0;
	const goal = X;
	let earlistTime = -1;
	const riverBlocks = Array(X + 1).fill(false);
	for (let time = 0; time < A.length; time++) {
		const blockIndex = A[time];
		if (!riverBlocks[blockIndex]) {
			riverBlocks[blockIndex] = true;
			cntPassableBlocks++;
		}
		if (goal === cntPassableBlocks) {
			earlistTime = time;
			break;
		}
	}
	return earlistTime;
	// write your code in JavaScript (Node.js 8.9.4)
}
