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
        // 마지막(4번재인덱스)자리 = 마지막에서두번째에 있던에(3번째인덱스값)
        answer[i] = answer[i - 1]; // 한칸씩 뒤로밀기
      }
    } else {
      // cache hit
      for (let i = idx; i >= 1; i--) {
        answer[i] = answer[i - 1]; // x의 원래자리(i=idx)에 x앞자리(i-1)값을 할당
      }
    }
    answer[0] = x; // miss든, hit든 어차피 맨앞에 추가되는건 같음 // 앞자리는 내(x)차지
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

function sol(size, work) {
  let cache = Array.from({ length: size }, () => 0);

  for (let x of work) {
    if (cache.includes(x)) {
      const idx = cache.indexOf(x);
      cache.splice(idx, 1);
      cache.unshift(x);
    } else {
      cache.pop();
      cache.unshift(x);
    }
  }
  return cache;
}
console.log("sol", sol(5, arr));
