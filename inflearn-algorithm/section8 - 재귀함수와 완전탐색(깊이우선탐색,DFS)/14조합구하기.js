function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L, s) {
    if (L === m) answer.push(tmp.slice());
    else {
      // else는 뻗어나가는 쪽
      for (let i = s; i <= n; i++) {
        // 매개변수 s : for문의 스타트 넘버
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));
