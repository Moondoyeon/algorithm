function solution(n) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      answer += v + " "; // 전위순회
      DFS(v * 2);
      // answer += v + " "; // 중위순회
      DFS(v * 2 + 1);
      // answer += v + " "; // 후위순회
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));
// 전위 부 왼 오
// 중위 왼 부 오
// 후위 왼 오 부
