//결정 알고리즘은 이분탐색 사용
function count(songs, capacity) {
  let count = 1, // 0이 아닌 1부터 세는 이유가 뭘까
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      count++; // 새로운 dvd
      sum = x; // 새로운 dvd에 첫번째 더하는 음악
    } else {
      sum += x; // capacity 보다 작을동안 한 dvd안에 음악 계속 더해주기
    }
  }
  return count;
}
function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs); // 용량은 최소 9(용량 가장 큰노래)부터 시작해야 안빼놓고 녹화가능
  let rt = songs.reduce((a, b) => a + b, 0); // 최대 용량 ex) 45
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2); // 최적의 mid(capacity)을 찾는다 ex) 27 17 12 14 15 16

    // 시도해본 최소용량크기(mid)가 큰경우
    if (count(songs, mid) <= m) {
      answer = mid; // ex) answer = 27 17
      rt = mid - 1; // 26 16 - 27~45는 count가 2 또는 1 이 나옴, 27이상은 더 연산해 볼 필요 없고 더 최적의 답(m에 가까운) 찾기위해 rt=26
    } else {
      // 시도해본 최소용량크기(mid)가 작은경우
      lt = mid + 1; // 13 15 16 17 - count() > 3 이면 최소용량(mid)이 너무 작아서 dvd갯수가 3 초과함. mid보다 작은 용량들은 더이상 고려할 필요없음
    }
  }
  return answer;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // 최소 용량크기가 1이면? => DVD 갯수 9개 필요 > m
// // 최소 용량크기가 2이면? => DVD 갯수 9개 필요 > m
// // 최소 용량크기가 3이면? => DVD 갯수 8개 필요 > m
// // 최소 용량크기가 4이면? => DVD 갯수 8개
// // ...
// // 최소 용량크기가 10이면? => DVD 갯수 5개 필요 > m
// // 최소 용량크기가 15이면? => DVD 갯수 4개 필요 > m
// // 최소 용량크기가 17이면? => DVD 갯수 3개 필요 === m
// // ...
// // 최소 용량크기가 25이면? => DVD 갯수 2개 필요 < m
// // 최소 용량크기가 45이면? => DVD 갯수 1개 필요 < m
// console.log(solution(3, arr));

function countDVD(arr, cap) {
  let count = 1;
  let sum = 0;
  for (let x of arr) {
    // 노래들 용량 더한 값이 cap 보다는 작아야지
    if (sum + x > cap) {
      count++; // DVD 한개 완성
      sum = x;
    } else {
      sum += x;
    }
  }
  return count;
}
function sol(limit, arr) {
  let answer = 0;
  let lt = Math.max(...arr);
  let rt = arr.reduce((a, b) => a + b, 0);

  while (lt <= rt) {
    let cap = parseInt((lt + rt) / 2);
    if (countDVD(arr, cap) <= limit) {
      answer = cap;
      rt = cap - 1;
    } else {
      lt = cap + 1;
    }
  }
  return answer;
}
console.log("sol", sol(3, arr));
