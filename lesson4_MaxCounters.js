function solution(N, A) {
	const conuters = Array(N + 1).fill(0);
	// counters[0] === MaxCounterData
	let currentMax = 0;
	for (let i = 0; i < A.length; i++) {
		const maxCounterData = conuters[0];
		const targetCounter = A[i];
		if (targetCounter === N + 1) {
			conuters[0] = currentMax;
			continue;
		}
		if (maxCounterData > conuters[targetCounter]) {
			conuters[targetCounter] = maxCounterData + 1;
		} else {
			conuters[targetCounter]++;
		}
		currentMax = Math.max(currentMax, conuters[targetCounter]);
	}
	for (let i = 0; i < conuters.length; i++) {
		if (conuters[i] < conuters[0]) {
			conuters[i] = conuters[0];
		}
	}
	conuters.shift();
	return conuters;
	// write your code in JavaScript (Node.js 8.9.4)
}

// O(N + M)
