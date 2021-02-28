function solution(A) {
	const set = new Set();
	A.forEach((element) => {
		set.add(element);
	});
	return set.size;
	// write your code in JavaScript (Node.js 8.9.4)
}
