function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0); //부분집합 하나당 m갯수
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice()); // 깊은복사
    } else {
      // 정점 아래에 n개만큼 가지치기
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(solution(3, 2));
// D(0) => tmp[0]=1, D(1) => tmp[1]=1, tmp 1 1, D(2) push
//                   D(1) => tmp[1]=2, tmp 1 2, D(2) push
//                   D(1) => tmp[1]=3, tmp 1 3, D(2) push

// D(0) => tmp[0]=2, D(1) => tmp[1]=1, tmp 2 1, D(2) push
//                   D(1) => tmp[1]=2, tmp 2 2, D(2) push
//                   D(1) => tmp[1]=3, tmp 2 3, D(2) push

// D(0) => tmp[0]=3, D(1) => tmp[1]=1, tmp 3 1, D(2) push
//                   D(1) => tmp[1]=2, tmp 3 2, D(2) push
//                   D(1) => tmp[1]=3, tmp 3 3, D(2) push
//
// 재귀를 사용하면 변수에 동적 대응 가능 (다중 for문 은 불가)
