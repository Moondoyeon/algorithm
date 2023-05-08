function mySolution(size, arr) {
  let answer = [];

  for (let x of arr) {
    if (!answer.includes(x)) answer.unshift(x);
    else {
      let idx = answer.indexOf(x);
      arr[idx] = 0;
      answer.unshift(x);
    }
    if (answer.length > size) answer.pop();
  }

  return answer;
}

function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    let idx = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) idx = i;
    if (idx === -1) {
      // cache miss
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1]; // 한칸씩 뒤로밀기
      }
    } else {
      // cache hit
      for (let i = idx; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });
  return answer;
}

function solutionWithArrayMethod(size, arr) {
  let answer = [];
  arr.forEach((x) => {
    let idx = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) idx = i;
    if (idx === -1) {
      answer.unshift(x);
      if (answer.length > size) answer.pop();
    } else {
      answer.splice(idx, 1); // 삭제
      answer.unshift(x);
    }
  });
  return answer;
}
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(mySolution(5, arr));
console.log(solution(5, arr));
console.log(solutionWithArrayMethod(5, arr));
