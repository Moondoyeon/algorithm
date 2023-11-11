// O(n^2)
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    // 가장 큰수 부터 자리가 정해짐(마지막자리부터), 가장 작은 수는 반복카운트 x
    for (let j = 0; j < arr.length - i - 1; j++) {
      // i가 돌때마다 끝에서부터 자리가 정해지므로, 이미 비교끝난 끝원소는 비교할 필요 x
      if (arr[j] > arr[j + 1]) {
        // 앞(j)요소가 뒷(j+1)요소 보다 크면 자리 바꿔
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

// arr = [13, 5, 11, 7, 23, 15];
// idx =  0   1   2  3   4   5
// i=0일때 맨 마지막 비교를 idx 4(j), idx 5(j+1) 랑 해야한다. 그래서 조건식이  j < answer.length - i -1 임. j는 4까지만

// i = 0
// j = 0,1,2,3,4 (0-1, 1-2, 2-3, 3-4, 4-5)번째 원소 간 크기 비교

// i = 1
// j = 0,1,2,3 (0-1, 1-2, 2-3, 3-4)간 크기 비교

// i = 2
// j = 0,1,2 (0-1, 1-2, 2-3)간 크기 비교

// i = 3
// j = 0,1 (0-1, 1-2)간 크기 비교

// i = 4
// j = 0 (0-1)간 크기 비교
let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
function sol(arr) {
  let answer = arr.slice();
  for (let i = 0; i < answer.length - 1; i++) {
    // 비교범위을 줄인다.
    for (let j = 0; j < answer.length - i - 1; j++) {
      // 비교범위내에서 비교한다.
      if (answer[j] > answer[j + 1]) {
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
      }
    }
  }
  return answer;
}
