function solution(A) {
	const visited = Array(A.length + 2).fill(false);
	A.forEach((item) => (visited[item] = true));
	let missingNum;
	for (let i = 0; i < visited.length; i++) {
		if (!visited[i]) {
			missingNum = i;
		}
	}
	return missingNum;
	// write your code in JavaScript (Node.js 8.9.4)
}

console.log(solution([2, 3, 1, 5]));
console.log(solution([1]));
console.log(solution([2]));
console.log(solution([]));
