function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i], // 주인공
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j]; // 주인공보다 크면 삽입
      else break;
    }
    arr[j + 1] = tmp;
  }
  return answer;
}
// i=0 => j=-1
// i=1 => j=0, j는 마지막에 -1이 되고 arr[-1+1] = arr[0] = 7(주인공) || 7과 11(앞번째 인덱스값) 비교
// i=2 => j=1,0, j는 마지막에 -1이 되고 arr[-1+1] = arr[0] = 5(주인공) || 5와 11, 7을 비교
// i=3 => j=2,1,0 j가 0일때 break, arr[0+1] = arr[1] = 6(주인공) || 6과 ...
// i=4 => j=3,2, j가 2일때 break, arr[2+1] = arr[3] = 10
// i=5 => j=4,3,2, j가 2일때 break, arr[2+1] = arr[3] = 9

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
