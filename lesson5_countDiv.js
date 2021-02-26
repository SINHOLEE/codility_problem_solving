// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// #코멘트 #주석 #한마디 # 검색 3개를 연속으로 계산하려하면 우선연산자 순서때문에 꼬임...

function solution(A, B, K) {
	const offsetMod = parseInt(A / K);
	const Mod = parseInt(B / K);
	const a = Mod - offsetMod;
	const b = A % K === 0 ? 1 : 0;
	return a + b;
	// write your code in JavaScript (Node.js 8.9.4)
}
