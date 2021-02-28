// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	const AwithIndex = A.map((num, index) => ({ index, num }));
	AwithIndex.sort((a, b) => a.num - b.num);
	const len = A.length;
	console.log(AwithIndex);
	const maxProducted =
		AwithIndex[len - 3].num * AwithIndex[len - 2].num * AwithIndex[len - 1].num;
	if (
		AwithIndex[0].num < 0 &&
		AwithIndex[1].num < 0 &&
		AwithIndex[len - 1].num > 0
	) {
		const twoMinusProducted =
			AwithIndex[0].num * AwithIndex[1].num * AwithIndex[len - 1].num;
		return Math.max(maxProducted, twoMinusProducted);
	}
	return maxProducted;
	// write your code in JavaScript (Node.js 8.9.4)
}
console.log(solution([-5, -5, 4, 5]));
