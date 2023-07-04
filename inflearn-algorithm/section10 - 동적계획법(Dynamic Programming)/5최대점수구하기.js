// dy[i] y시간에 얻을 수 있는 최대점수
// 중복계산 x
function solution(m, arr) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    let ps = arr[i][0]; // problem score
    let pt = arr[i][1]; // problem time
    for (let j = m; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }
  answer = dy[m];
  return answer;
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));

// 0 0 0 0 0 | 0 0 0 0 0 | 0 0 0 0 0 | 0 0 0 0 0
// 0 0 0 0 0 | 10 10 10 10 10 | 10 10 10 10 10 | 10 10 10 10 10 | 10
// 0 0 0 0 0 | 10 10 10 10 10 | 10 10 25 25 25 | 25 25 35 35 35 | 35
// 0 0 0 0 0 | 10 10 10 15 15 | 15 15 25 25 25 | 25 25 35 35 35 | 40
// 0 0 0 6 6 | 10 10 10 16 16 | 16 21 25 25 25 | 31 31 35 35 35 | 41
// 0 0 0 6 7 | 10 10 13 16 17 | 17 21 25 25 25 | 31 32 35 35 38 | 41
