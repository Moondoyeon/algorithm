function solution() {
  let answer = "";
  let queue = [];
  queue.push(1); // 루트노드
  while (queue.length) {
    console.log(queue);
    let v = queue.shift();
    answer += v + " ";
    for (let nextVertex of [v * 2, v * 2 + 1]) {
      if (nextVertex > 7) continue; // nextVertex가 7보다 크면 아래로직(for문 로직) 실행안하고 넘어간다는 뜻, 건너뛴다
      queue.push(nextVertex);
    }
  }
  return answer;
}

console.log(solution());
// BFS는 레벨탐색 이면서 최단거리를 구하는 방법론 // FIFO
// 상태트리 로 해석하는게 좋다
// ex) 최단거리 구할때: vertex 1이 출발지점 -> 도착지점
// 레벨1 에서 출발지점에서 한번만에 갈수있는곳 뭐있나 봤더니(2,3)전부 목표지점이 아니라면 레벨2로 ㄱㄱ
// 레벨2 에서 출발지점에서 두번만에 갈수있는곳 뭐있나 봤더니(4,5,6,"7") 목표지점이 7이므로, 최단거리는 2
