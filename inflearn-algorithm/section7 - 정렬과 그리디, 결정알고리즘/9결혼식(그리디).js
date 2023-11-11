function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let timeLine = [];
  for (let x of times) {
    // 한사람의 이벤트를 두개로 분리
    timeLine.push([x[0], "s"]);
    timeLine.push([x[1], "e"]);
  }

  timeLine.sort((a, b) => {
    // 숫자가 같을때 e가 s보다 우선 (아스키 코드로 오름차순 정렬) // e: 101, s:115
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let count = 0;
  for (let x of timeLine) {
    if (x[1] === "s") count++; // 들어오고
    else count--; // 나가고

    answer = Math.max(answer, count);
  }
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));

// sort
//[
//   [ 5, 's' ],  [ 12, 's' ],
//   [ 14, 'e' ], [ 14, 's' ],
//   [ 15, 'e' ], [ 15, 's' ],
//   [ 18, 'e' ], [ 20, 'e' ],
//   [ 20, 's' ], [ 30, 'e' ]
// ]
