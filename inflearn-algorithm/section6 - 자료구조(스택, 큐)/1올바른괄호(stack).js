function mySolution(s) {
  let answer = "YES";
  let open = 0;
  let close = 0;
  for (let x of s) {
    if (x === "(") open++;
    if (x === ")") close++;
  }
  if (open !== close) answer = "NO";

  return answer;
}

let a = "(()(()))(()";
let b = "(())()";
let c = "(()()))";
console.log(mySolution(a));
console.log(mySolution(b));
console.log(mySolution(c));

// stack LIFO
// Queue FIFO
// 닫는 괄호의 짝궁은 스택의 가장 상단(마지막Idx)에 있다.
function solution(s) {
  let answer = "YES";
  stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) answer = "NO"; // 스택에 열린괄호가 없는상태 ㅠ, 닫는괄호의짝이없네
      stack.pop();
    }
  }
  if (stack.length > 0) answer = "NO"; // 모든 탐색이 끝나고, 열린괄호가 스택에 남아있는 경우
  return answer;
}
console.log(solution(a));
console.log(solution(b));
console.log(solution(c));

function sol(s) {
  let answer = "YES";
  let stack = [];

  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      else stack.pop();
    }
  }

  if (stack.length === 0) answer = "YES";
  if (stack.length) answer = "NO";

  return answer;
}
console.log("sol", sol(a));
console.log("sol", sol(b));
console.log("sol", sol(c));
