function solution(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1]; // 상하좌우, 대각선이므로 8방향
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function DFS(x, y) {
    board[x][y] = 0;
    for (let k = 0; k <= n; k++) {
      let nextX = x + dx[k];
      let nextY = y + dy[k];
      if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < n && board[nextX][nextY] === 1) {
        DFS(nextX, nextY); // 01 12 21 11 // ,,,,
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        answer++;
        DFS(i, j); // 섬의 시작좌표 00, 05, 33, 40, 62
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
