function solution(n) {
  let answer = [];
  let check = Array.from({ length: n + 1 }, () => 0);

  function DFS(v) {
    if (v === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (check[i] === 1) tmp += i; // 1로 체크된 원소만
      }
      if (tmp.length > 0) answer.push(tmp); // 공집합 제거
    } else {
      // 트리가 뻗어나가는 부분
      check[v] = 1; // 정점 포함
      DFS(v + 1); // 왼쪽 자식 정점
      check[v] = 0; // 정점 미포함
      DFS(v + 1); // 오른쪽 자식 정점
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
