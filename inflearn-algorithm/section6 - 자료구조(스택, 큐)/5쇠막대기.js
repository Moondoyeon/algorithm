function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else {
      stack.pop(); // 레이져의 여는 괄호 스택에서 없애기
      if (s[i - 1] === "(") answer += stack.length; //레이저 ()
      else answer++; // 막대기의 끝
      //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
    }
  }
  return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));
