function solution(board) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  function DFS(x, y) {
    if (x === board.length - 1 && y === board.length - 1) answer++;
    else {
      for (let k = 0; k < 4; k++) {
        let nextX = x + dx[k];
        let nextY = y + dy[k];
        if (nextX >= 0 && nextX <= 6 && nextY >= 0 && nextY <= 6 && board[nextX][nextY] === 0) {
          board[nextX][nextY] = 1;
          DFS(nextX, nextY);
          board[nextX][nextY] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));

//           D(0,0)
//        /   |  |  \
// D(-1,0) D(0,1) D(1,0) D(0,-1)  <= 이걸 생각해내는게 관건인듯
//         / | | \
// D(-1,1) D(0,2) D(1,1) D(0,0) => (0,1)을 기준으로 12시 3시 6시 9시
//         / | | \
// D(-1,2) D(0,3) D(1,2) D(0,1)
//         / | | \
// D(-1,3) D(0,4) D(1,3) D(0,2)
//         / | | \
// D(-1,4) D(0,5) D(1,4) D(0,3)
//         / | | \
// D(-1,5) D(0,6) D(1,5) D(0,4)  => (0,5)을 기준으로 12시 3시 6시 9시
//         / | | \
// D(-1,6) D(0,7) D(1,6) D(0,5)  => (0,6)을 기준으로 12시 3시 6시 9시
//                / | | \
// D(0,6) D(1,7) D(2,6) D(1,5)  => (1,6)을 기준으로 12시 3시 6시 9시
