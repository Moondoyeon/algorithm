// 냅색(가방) 알고리즘
// DFS로 풀었었음
// 그러나 동전의 종류개수와 거슬러줄 금액이 크다면 다이나믹으로 풀어야함
// dy는 큰 숫자로 초기화
// dy[i] // i금액 거슬러주는데 사용된 최소동전개수
// j = coin[i] ~ m(15) // 1~15, 2~15, 5~15
function solution(m, coin) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 1000);
  dy[0] = 0;
  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  answer = dy[m];
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
