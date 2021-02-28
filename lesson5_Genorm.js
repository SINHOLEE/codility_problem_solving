// 핵심개념
// 시작점과 끝점을 반단하는 로직은 가우스 정수?를 사용
function solution(S, P, Q) {
	const AVisited = Array(S.length + 1).fill(0);
	const CVisited = Array(S.length + 1).fill(0);
	const GVisited = Array(S.length + 1).fill(0);

	// const arrayBucket = [[], AVisited, CVisited, GVisited];

	const first = S[0];

	if (first === 'A') {
		AVisited[1]++;
	} else if (first === 'C') {
		CVisited[1]++;
	} else if (first === 'G') {
		GVisited[1]++;
	}
	//1 디피 전처리
	for (let i = 2; i < S.length + 1; i++) {
		const currentWord = S[i - 1];
		AVisited[i] = AVisited[i - 1] + (currentWord === 'A' ? 1 : 0);
		CVisited[i] = CVisited[i - 1] + (currentWord === 'C' ? 1 : 0);
		GVisited[i] = GVisited[i - 1] + (currentWord === 'G' ? 1 : 0);
	}
	let res = [];
	for (let i = 0; i < Q.length; i++) {
		const startIdx = P[i];
		const endIdx = Q[i] + 1;

		if (AVisited[startIdx] !== AVisited[endIdx]) {
			res.push(1);
			continue;
		} else if (CVisited[startIdx] !== CVisited[endIdx]) {
			res.push(2);
			continue;
		} else if (GVisited[startIdx] !== GVisited[endIdx]) {
			res.push(3);
			continue;
		} else {
			res.push(4);
		}
	}
	// // 	// if()
	// // }
	return res;
	// write your code in JavaScript (Node.js 8.9.4)
}

console.log(solution('CAGCCTA', [2, 5, 0, 4], [4, 5, 6, 4]));
