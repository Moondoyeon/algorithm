function solution(s) {
  let answer = "",
    stack = [];
  for (x of s) {
    if (x === ")") {
      while (stack.pop() !== "("); // 여는 괄호가 아닌경우 pop(), 여는 괄호 만나면 stop
    } else {
      stack.push(x);
    }
  }
  answer = stack.join("");
  return answer;
}
let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
