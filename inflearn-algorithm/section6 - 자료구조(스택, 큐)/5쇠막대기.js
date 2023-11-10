function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]); // 여는 괄호는 항상 푸쉬~
    else {
      // 닫는 괄호 : 레이저 or 막대기 끝부분
      stack.pop(); // 닫는괄호의 짝(여는 괄호) 항상 스택에서 팝
      if (s[i - 1] === "(") answer += stack.length; //레이저 ()
      else answer++; // 막대기의 끝
      //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
    }
  }
  return answer;
}

let a = "()(((()())(())()))(())";
let b = "(((()(()()))(())()))(()())";

function sol(s) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else {
      stack.pop();
      if (s[i - 1] === "(") answer += stack.length;
      else answer++;
    }
  }
  return answer;
}
console.log(sol(a));
console.log(sol(b));
