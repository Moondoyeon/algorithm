function mySolution(arr) {
  let answer = [];
  let plus = [];
  for (let x of arr) {
    if (x < 0) answer.push(x);
    else plus.push(x);
  }
  for (let x of plus) answer.push(x);

  return answer;
}

function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        // j는 뒤로가고싶은애들(양), j+1 뒤에있는데 앞에 가야하는애들(음)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}
// 버블정렬 - 이웃한 거 요소간 비교
// i = 0 1 2 3 4 5 6 (큰범위의 비교횟수 )
// j = 0<7, 0<6, 0<5, 0<4, 0<3, 0<2, 0<1 (요소간 비교횟수 )
// 반복마다 Length-i-1 번째 요소가 정해짐
let arr = [1, 2, 3, -3, -2, 5, 6, -6];
// console.log(mySolution(arr));
console.log(solution(arr));

// 숫자 크기대로 정렬함
function sol(arr) {
  let answer = arr.slice();
  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = 0; j < answer.length - i - 1; j++) {
      if (answer[j] > answer[j + 1]) {
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
      }
    }
  }
  return answer;
}
console.log(sol(arr));
