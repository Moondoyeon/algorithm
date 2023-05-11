//결정 알고리즘은 이분탐색 사용
function count(songs, capacity) {
  let count = 1,
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      count++; // 새로운 dvd
      sum = x; // 새로운 dvd에 첫번째 더하는 음악
    } else sum += x; // capacity 보다 작을동안 한 dvd안에 음악 계속 더해주기
  }
  return count;
}
function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs); // 최소 용량 ex) 9
  let rt = songs.reduce((a, b) => a + b, 0); // 최대 용량 ex) 45
  while (lt <= rt) {
    // 디폴트 조건
    let mid = parseInt((lt + rt) / 2); // 최적의 mid들을 찾는다 ex) 27
    if (count(songs, mid) <= m) {
      answer = mid; // ex) answer = 27
      rt = mid - 1; // 디폴트,  ex) 27~45는 count가 2 또는 1 이 나옴, 27이상은 더 연산해 볼 필요 없고 더 최적의 답(m에 가까운) 찾기위해 rt=26
    } else {
      lt = mid + 1; // count() > 3 이면 최소용량(mid)이 너무 작아서 dvd갯수가 3 초과함. mid보다 작은 용량들은 더이상 고려할 필요없음
    }
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
