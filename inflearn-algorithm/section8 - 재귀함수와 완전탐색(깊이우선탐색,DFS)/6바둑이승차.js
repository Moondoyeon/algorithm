function mySolution(c, arr) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;
  let n = arr.length;

  function DFS(L, sum) {
    if (L === n) {
      if (sum <= c) {
        if (c - sum < min) {
          min = c - sum;
          answer = sum;
        }
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(mySolution(259, arr));

function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > c) return; // 가지치기
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(259, arr));
