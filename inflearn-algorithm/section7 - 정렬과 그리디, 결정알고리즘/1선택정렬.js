function mySolution(arr) {
  let answer = arr.sort((a, b) => a - b);
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(mySolution(arr));
console.log(solution(arr));

function solution(arr) {
  let answer = arr; // 얕은 복사 - 참조값(동일한 객체 내용) 공유
  for (let i = 0; i < arr.length; i++) {
    let idx = i; // idx - 최소값 위치 저장하는 역할
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return answer;
}
