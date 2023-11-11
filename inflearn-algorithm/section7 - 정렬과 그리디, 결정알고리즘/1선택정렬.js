function mySolution(arr) {
  let answer = arr.sort((a, b) => a - b);
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];

// 선택정렬 - 이중포문 O(n^2)
function solution(arr) {
  let answer = arr; // 얕은 복사 - 참조값(동일한 객체 내용) 공유
  for (let i = 0; i < arr.length; i++) {
    let idx = i; // idx - 최소값 위치 저장하는 역할
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j; // j가 한번 다 돌며 비교하면서 idx에는 가장작은 요소의 인덱스가 저장돼
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]]; // i=0 일때, idx 1 i=1일때 idx는3,
  }

  return answer;
}
console.log(solution(arr));
// [13 5 11 7 23 15] i=0 idx=1 가장작은요소의 idx 쥐고 있다가 j끝나면 스위치
// 5 13 11 7 23 15 i=1 idx=3
// 5 7 11 13 23 15 i=2 idx=2
// 5 7 11 13 23 15 i=3 idx=3
// 5 7 11 13 23 15 i=4 idx=5
// 5 7 11 13 15 23 i=5 idx=5
// 5 7 11 13 15 23
// i번째로 올수있는 숫자를 다 탐색해서 선택해서 바꿔주는것

function sol(arr) {
  let answer = [...arr];
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (answer[j] < answer[idx]) idx = j; // 가장 작은 요소의 인덱스를 비교, 찾기만
    }
    [answer[i], answer[idx]] = [answer[idx], answer[i]]; // 자리를 바꾸는 행위는 한텀(j)이 완전히 돌고나서.. 진짜 i 자리에 와야할 작은숫자는 idx 자리에 있던애야
  }
  return answer;
}
console.log(sol(arr));
