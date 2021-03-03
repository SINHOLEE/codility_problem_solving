function solution(S, P, Q) {
	const ImpactFactorMapper = {
		A: 1,
		C: 2,
		G: 3,
		T: 4,
	};
	const findMinImpactFator = (start, end, stringArray) => {
		let minValue = 4;
		for (let i = start; i <= end; i++) {
			const letter = stringArray[i];
			const impactFactor = ImpactFactorMapper[letter];
			minValue = Math.min(minValue, impactFactor);
		}
		return minValue;
	};
	const LEN = P.length;

	const result = [];
	for (let i = 0; i < LEN; i++) {
		result.push(findMinImpactFator(P[i], Q[i], S));
	}
	return result;
	// write your code in JavaScript (Node.js 8.9.4)
}
