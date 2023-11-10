function solution(s) {
  let answer = 0;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x)); // 문자형숫자가 맞다면
    else {
      let rt = stack.pop(); // 꺼내는 순서 중요 (-, /)할때
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
// 우리가 일반적으로 사용하는 사칙연산은 피연산자(숫자)사이에 연산자(+-*/)가 들어가는 형태로 '중위표기식(infix expression)'
// 후위표기식은 피연산자가 먼저쓰이고, 그 뒤로 연산자가 나오는 형태
