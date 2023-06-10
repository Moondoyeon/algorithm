function solution(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        // 섬 출발점 찾기
        board[i][j] = 0; // 바다로 만들고
        queue.push([i, j]);
        answer++;
        while (queue.length) {
          let el = queue.shift();
          for (let k = 0; k < 8; k++) {
            // 섬 출발점 8방향으로 탐색
            let nx = el[0] + dx[k];
            let ny = el[1] + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
              board[nx][ny] = 0; // 섬 출발점과 이어져있는 섬 바다로 만들기
              queue.push([nx, ny]); // 섬 출발점과 이어져있는 섬 의 8방향 탐색
            }
          }
        }
      }
    }
  }

  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
