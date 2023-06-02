function mySolution(n, k, arr, m) {
  let answer = [];
  let tmp = Array.from({ length: k }, () => 0);

  function DFS(L, s, sum) {
    if (L === k && sum % m === 0) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i < n; i++) {
        // i가 idx 번호기때문에 i<n
        tmp[L] = arr[i];
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0, 0);
  return answer.length;
}

let arr = [2, 4, 5, 8, 12];
console.log(mySolution(5, 3, arr, 6));

function solution(n, k, arr, m) {
  let answer = 0;
  function DFS(L, s, sum) {
    if (L === k) {
      if (sum % m === 0) answer++;
    } else {
      for (let i = s; i < n; i++) {
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0, 0);
  return answer;
}
