// 순차탐색 O(n)
function mySolution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) answer = i + 1;
  }
  return answer;
}
let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(mySolution(32, arr));

// O(log2n)
// 이분 검색은 자료가 무조건 정렬돼있어야함
// lt ~ rt 검색범위, 점차 줄여나가면 됨
// mid값 정하고, lt, rt 값에 변화주면됨
function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) right = mid - 1; // 한번 비교에 의해서 검색범위가 절반으로 줄어듦
    else left = mid + 1;
  }
  return answer;
}
console.log(solution(32, arr));
