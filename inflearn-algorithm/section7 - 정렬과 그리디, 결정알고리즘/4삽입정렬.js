function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i]; // 주인공
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j]; // 주인공보다 크면 삽입
      else break;
    }
    arr[j + 1] = tmp;
  }
  return answer;
}

function solution2(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (arr[i] < answer[j]) {
        answer.splice(j, 0, arr[i]);
        break;
      }
    }
  }
  return answer;
}

// 설명~
// 일단 j는 항상 i보다 1작은 숫자로 시작한다. 반복문돌면서 j--
// tmp 가 앞에애들보다(arr[j]) 계~속 작으면 0번재인덱스에 삽입되는겨.. (j가 -1될때까지 )
// tmp 보다 큰 애들은(arr[j]) 한칸씩 뒤로 복사밀어내기 해주고
// tmp 보다 작은애들(arr[j])은 break; 그 j보다는 tmp가 큰숫자라는 뜻이라서 arr[j+1] = tmp 해주고

// i=0 => j=-1
// i=1 => j=0, j는 마지막에 -1이 되고 arr[-1+1] = arr[0] = 7(주인공) || 7과 11(앞번째 인덱스값) 비교
// i=2 => j=1,0, j는 마지막에 -1이 되고 arr[-1+1] = arr[0] = 5(주인공) || 5와 11, 7을 비교
// i=3 => j=2,1,0 j가 0일때 break, arr[0+1] = arr[1] = 6(주인공) || 6과 ...
// i=4 => j=3,2, j가 2일때 break, arr[2+1] = arr[3] = 10
// i=5 => j=4,3,2, j가 2일때 break, arr[2+1] = arr[3] = 9

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
console.log(solution2(arr));

function sol(arr) {
  let answer = arr.slice();

  for (let i = 0; i < arr.length; i++) {
    let IAM = arr[i]; // 주인공 // 11 => 7=> 5=> 6
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > IAM) {
        arr[j + 1] = arr[j]; // 주인공(IAM)보다 큰애들은 뒤로 복사밀어내기
      }
      // i=1일때 => 11 11
      // i=2일때 => 7 11 11, 7 7 11
      // i=3일때, j=2일때 => 5 7 11 11 10 9
      // i=3일때, j=1일때 => 5 7 7 11 10 9
      else break; // 얘보단(j) 내가(IAM) 더 크네??
      // i=3일때, j=0일때 => arr[j](5) < IAM(6)
    }
    arr[j + 1] = IAM; // j+1 자리에 내(IAM)가 들어가야지! -<= 주인공 제자리에 삽입
    // i=1일때 j는 -1, arr[0]=7 => 7 11 5 6 10 9
    // i=2일때 j는 -1, arr[0]=5 => 5 7 11 6 10 9
    // i=3일때 j는 0, arr[0+1]=6 => 5 6 7 11 10 9
  }
  return answer;
}
