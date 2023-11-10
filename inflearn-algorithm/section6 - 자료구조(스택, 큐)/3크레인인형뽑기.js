function solution(board, moves) {
  let answer = 0;
  let stack = [];

  // 이중포문아님?
  moves.forEach((position) => {
    // 열
    for (let i = 0; i < board.length; i++) {
      // 행
      if (board[i][position - 1] !== 0) {
        // 인형이 있으면
        let tmp = board[i][position - 1];
        board[i][position - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          // 똑같은 인형이면 stack에 안 넣고 이미 넣었던 인형만 pop()
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break; // 얘가 없으면 행이 0~4까지 다 돈다. ex) 첫반복문 때 [3][1] 꺼내고, [4][1] 또 꺼내게 됨
      }
    }
  });
  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let after = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 5, 0, 0],
  [0, 2, 4, 0, 2],
  [0, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4]; //4 3 1 1 3 2 x 3 => stack =[4,2,3]

// console.log(solution(a, b));
// O(N^2)
function sol(board, moves) {
  let answer = 0;
  let basket = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let col = moves[i] - 1; // 열정보
      if (board[j][col] !== 0) {
        pushOrPop(board[j][col]);
        board[j][col] = 0;
        break;
      }
    }
  }

  function pushOrPop(doll) {
    if (basket.length && basket[basket.length - 1] === doll) {
      basket.pop();
      answer += 2;
    } else {
      basket.push(doll);
    }
  }

  return answer;
}

console.log("sol", sol(a, b));
