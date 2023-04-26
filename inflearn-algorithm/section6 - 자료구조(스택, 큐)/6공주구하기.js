function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift()); // 앞의 두개 빼서 뒤로 보내
    queue.shift(); // 3 외친 왕자는 아예 빼
    if (queue.length === 1) answer = queue.shift(); // 마지막 남은 왕자 1명 빼면 while문 종료
  }
  return answer;
}

console.log(solution(8, 3));
