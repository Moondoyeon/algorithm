function mySolution(m, arr) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  let n = arr.length;
  function DFS(L) {
    if (L === m) {
      let pass = tmp.filter((v, i) => {
        if (tmp.indexOf(v) === i) return v;
      }); // 중복제거한 배열리턴
      if (pass.length !== m) return;
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        tmp[L] = arr[i];
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  answer.push(answer.length);
  return answer;
}

let arr = [3, 6, 9];
console.log(mySolution(2, arr));

function solution(m, arr) {
  let answer = [],
    n = arr.length;
  let ch = Array.from({ length: n }, () => 0); // tmp배열에 Arr원소의 포함여부 체크하기 위함
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    console.log(ch, tmp);
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);

  return answer;
}

console.log(solution(2, arr));
// ch, tmp
// [ 0, 0, 0 ] [ 0, 0 ]
// [ 1, 0, 0 ] [ 3, 0 ] D(0) i=0 /
// [ 1, 1, 0 ] [ 3, 6 ] D(0) i=0 / D(1) i=1
// [ 1, 0, 1 ] [ 3, 9 ] D(0) i=0 / D(1) i=2
// [ 0, 1, 0 ] [ 6, 9 ] D(0) i=1 /
// [ 1, 1, 0 ] [ 6, 3 ] D(0) i=1 / D(1) i=0
// [ 0, 1, 1 ] [ 6, 9 ] D(0) i=1 / D(1) i=2
// [ 0, 0, 1 ] [ 9, 9 ] D(0) i=2 /
// [ 1, 0, 1 ] [ 9, 3 ] D(0) i=2 / D(1) i=0
// [ 0, 1, 1 ] [ 9, 6 ] D(0) i=2 / D(1) i=1

function solution2(m, arr) {
  let answer = [],
    n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  let tmp = [];
  function DFS(L) {
    if (L === m) answer.push(tmp.slice());
    else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp.push(arr[i]);
          DFS(L + 1);
          ch[i] = 0;
          tmp.pop();
        }
      }
    }
  }
  DFS(0);
  return answer;
}
console.log(solution2(2, arr));
