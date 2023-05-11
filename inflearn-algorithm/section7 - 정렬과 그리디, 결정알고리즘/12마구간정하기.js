function count(stable, dist) {
  let count = 1,
    endPoint = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - endPoint >= dist) {
      count++; // 마구간에 배치한 말 수
      endPoint = stable[i]; // 말 배치한 좌표
    }
  }
  return count;
}
function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1; // 말 끼리 가장 가까운거리 ex 1
  let rt = stable[stable.length - 1]; // 말 끼리 가장 먼 거리 ex 9
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2); // 말 끼리 최대 가까운 거리 찾아내기 ex 5
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1; // rt=4
    }
  }
  return answer;
}
let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
