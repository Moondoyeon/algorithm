function mySolution(n, r) {
  let answer;
  function DFS(n, r) {
    if (n === r || r === 0) return 1;
    else {
      return DFS(n - 1, r - 1) + DFS(n - 1, r);
    }
  }
  answer = DFS(n, r);
  return answer;
}
console.log(mySolution(5, 3));
console.log(mySolution(33, 19));

function solution(n, r) {
  let answer;
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }

  answer = DFS(n, r);
  return answer;
}
console.log(solution(5, 3));
console.log(solution(33, 19)); // 연산 속도 줄이는 법 => 메모이제이션: 이미 했던 계산의 결과를 재사용, 재연산 x
