function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // idx 0은 고려 x
  let ch = Array.from({ length: n + 1 }, () => 0); // idx 0은 고려 x
  path = [];
  for (let [a, b] of arr) {
    graph[a][b] = 1; // 단방향 그래프
  }

  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          DFS(i);
          ch[i] = 0;
          path.pop();
        }
      }
    }
  }
  path.push(1);
  ch[1] = 1;
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
//     v,i      v,i                 v,i     v,i
// D1  1,2(o) -> 2 1(x), 2 3(o) -> 3,4 -> 4,2(x) 4,5(o) // 12345
//     1,2(o) -> 2 1(x), 2 3(x), 2 5(o)  // 125
//     1,3(o) -> 3 4 -> 4 2 -> 2 1(x) 2 3(x) 2 5(0) // 13425
//     1,3(o) -> 3 4 -> 4 2(x) 4 5(o) // 1345
//     1,4(o) -> 4 2 -> 2 1(x) 2 3(o) -> 3 4(x) -> //...
//     1,4(o) -> 4 2 -> 2 1(x) 2 3(x) 2 5(o) -> // 1425
//     1,4(o) -> 4 2(x) 4 5(x) -> // 145
//     1,5(x)
