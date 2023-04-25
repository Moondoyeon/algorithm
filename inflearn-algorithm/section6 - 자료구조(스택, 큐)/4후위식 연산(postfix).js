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
