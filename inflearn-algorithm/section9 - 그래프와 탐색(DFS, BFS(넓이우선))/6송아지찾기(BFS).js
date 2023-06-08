function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let distance = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  ch[s] = 1;
  queue.push(s); // 현수출발점
  distance[s] = 0; // 레벨
  while (queue.length) {
    let x = queue.shift();
    for (let nextX of [x - 1, x + 1, x + 5]) {
      if (nextX === e) return distance[x] + 1; // nextX 자식층(아래층,답층), x 부모층
      if (nextX > 0 && nextX <= 10000 && ch[nextX] === 0) {
        ch[nextX] = 1;
        queue.push(nextX);
        distance[nextX] = distance[x] + 1;
      }
    }
  }

  return answer;
}

console.log(solution(8, 3));

function solution2(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  let level = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      for (let nextX of [x - 1, x + 1, x + 5]) {
        if (nextX === e) return level + 1;
        if (nextX > 0 && nextX <= 10000 && ch[nextX] === 0) {
          ch[nextX] = 1;
          queue.push(nextX);
        }
      }
    }
    level++;
  }

  return answer;
}

console.log(solution2(5, 14));
