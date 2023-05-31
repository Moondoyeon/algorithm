function solution(n, f) {
  let answer,
    flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0));
  let b = Array.from({ length: n }, () => 0); // 조합
  let ch = Array.from({ length: n + 1 }, () => 0);
  let p = Array.from({ length: n }, () => 0); // 순열
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }
  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum !== f) return;
    if (L === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1; // 0 1 이 원소
          p[L] = i; // 1 2 3 4 이 원소
          DFS(L + 1, sum + b[L] * p[L]); // 뎁스(L)마다 곱하는 순열 원소는 달라지지.
          ch[i] = 0;
        }
      }
    }
  }
  // 조합 만들기 (한 번 만들고 불변)
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }

  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));
// 조합 - b
// n=4이면 b는 3C0,3C1,3C2,3C3 => 1 3 3 1
// n=5이면 b는 4C0,4C1,4C2,4C3,4C4 => 1 4 6 4 1

// 순열 - p
// n=4이면 1234, 1243, 1324, 1342, ... , 4321

// f 구하는 방법
// 조합 b(1331) * 순열 p(1234)의 합
// ex) 1*1 + 3*2 + 3*3 + 1*4
