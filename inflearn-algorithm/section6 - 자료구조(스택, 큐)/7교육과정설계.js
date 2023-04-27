function mySolution(need, plan) {
  let answer = "YES";
  let queue = [];
  for (let x of plan) {
    for (let y of need) {
      if (x === y) queue.push(x);
    }
  }

  if (queue.join("") !== need) answer = "NO";

  return answer;
}

function solution(need, plan) {
  let answer = "YES";
  let queue = need.split(""); // [ 'C', 'B', 'A' ]

  for (let x of plan) {
    if (queue.includes(x)) {
      if (queue.shift() !== x) answer = "NO";
    }
  }
  if (queue.length > 0) answer = "NO"; // 필수과목을 계획에서 빠뜨린 경우
  return answer;
}

let a = "CBA";
let b = "CBDAGE"; // "CBA"
let c = "BCDAGE"; // "BCA"
console.log(mySolution(a, b));
console.log(mySolution(a, c));
console.log(solution(a, b));
console.log(solution(a, c));
