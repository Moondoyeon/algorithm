function solution(meeting) {
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1]; // 끝나는 시간 오름차순 정렬
  });

  let answer = 0;
  let endTime = 0;
  for (let x of meeting) {
    if (x[0] >= endTime) {
      // 2) 이번기 시작시간 >= 직전기 끝나는시간 여야함
      answer++;
      endTime = x[1]; // 1) 이번 반복문 마치기전, 이번기 끝나는 시간 할당
    }
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr));
console.log(solution(arr2));
