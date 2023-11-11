function solution(arr) {
  let answer = [];
  let sortArr = arr.slice(); // 깊은복사 (단 중첩 객체인 데이터가 있다면 얕은복사)
  sortArr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }
  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
// O(n)
function sol(arr) {
  let answer = [];
  let sortedArr = arr.slice().sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) answer.push(i + 1);
  }
  return answer;
}
console.log("sol", sol(arr));
