function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    // 가장 큰수 부터 자리가 정해짐(마지막자리부터), 가장 작은 수는 반복카운트 x
    for (let j = 0; j < arr.length - i - 1; j++) {
      // i가 돌때마다 끝에서부터 자리가 정해지므로, 이미 비교끝난 끝원소는 비교할 필요 x
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

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
