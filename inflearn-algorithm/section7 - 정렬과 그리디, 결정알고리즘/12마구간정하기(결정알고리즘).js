// 가장가까운 2마리 말사이의 최대거리가 3이다? === 모든 말사이거리는 최소 3이상이라는 뜻
// 가장 가까운 2마리의 거리를 5로 했을때 3마리 배치할 수 잇느냐?
function count(stable, dist) {
  // 맨첨에 dis로 5가 들어옴 => 가장가까운 말간거리를 5로 했을때 3마리(count) 배치할수있냐? => 2마리 밖에 배치못함=> dist를 줄여야겠네
  let count = 1,
    endPoint = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - endPoint >= dist) {
      count++; // 마구간에 배치한 말 수
      endPoint = stable[i]; // 말 배치한 마구간 좌표
    }
  }
  return count;
}
function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1; // 말 끼리 가장 가까운거리 바로옆마구간
  let rt = stable[stable.length - 1]; // 말 사이 거리가 9보다 클 수는 없음
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2); // 가장 가까운 두 말의 최대거리로서의 답이 돼냐 ? 5부터~

    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1; // rt=4
    }
  }
  return answer;
}
// console.log(solution(3, arr));
let arr = [1, 2, 8, 4, 9];
function sol(horses, stable) {
  let answer = 0;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];

  while (lt <= rt) {
    let dist = parseInt((lt + rt) / 2);
    if (countHorse(stable, dist) >= horses) {
      // 말 많이 배치할 수록 (3마리이상) 좋은거야~
      answer = dist;
      lt = dist + 1; // if문 조건이 성립된다는 말은,, === 말이 마구간에 엄청많이 배치된다는 뜻 => distance가 멀지않다 마구간사이가 촘촘하네 => distance 크기를 늘려보자 => lt가 한칸 뒤로
    } else {
      rt = dist - 1; // if 조건문이 성립하지 않는다는건,, 디스탄스 크기가 너무 커서 많이 1,2 마리만 배치된다는 뜻 => 디스탄스 크기를 줄이자 => rt 왼쪽으로 --
    }
  }
  return answer;
}
function countHorse(stable, dist) {
  let count = 1;
  let latestPushed = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - latestPushed >= dist) {
      count++;
      latestPushed = stable[i];
    }
  }
  return count;
}
console.log("sol", sol(3, arr));
