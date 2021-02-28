// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	const east = [];
	const west = [];
	const westCarsInFrontOfEest = [];
	let westCnt = 0;
	for (let i = 0; i < A.length; i++) {
		if (A[i]) {
			west.push(i);
			westCnt++;
		} else {
			east.push(i);
			westCarsInFrontOfEest.push(westCnt);
		}
	}
	const westLen = west.length;
	const westCarsBehindEast = westCarsInFrontOfEest.map(
		(subtracted) => westLen - subtracted
	);
	const answer = westCarsBehindEast.reduce((prev, curr) => prev + curr, 0);

	return answer > 1000000000 ? -1 : answer;
	// write your code in JavaScript (Node.js 8.9.4)
}

console.log(solution([0, 1, 0, 1, 1]));
