function mySolution(n) {
  let answer = 1;
  function DFS(n) {
    if (n === 1) return;
    else {
      answer *= n;
      DFS(n - 1);
    }
  }
  DFS(n);
  return answer;
}

console.log(mySolution(5));

function solution(n) {
  let answer;
  function DFS(n) {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  }
  answer = DFS(n);
  return answer;
}
console.log(solution(5));

//DFS(1) return 1
//DFS(2) return 2*DFS(1) => 2*1 => 2
//DFS(3) return 3*DFS(2) => 3*2 => 6
//DFS(4) return 4*DFS(3) => 4*6 => 24
//DFS(5) return 5*DFS(4) => 5*24 => 120
// answer = DFS(5) : 120
