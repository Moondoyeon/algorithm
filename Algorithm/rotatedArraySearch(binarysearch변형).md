## 문제 : rotatedArraySearch
'부분적으로 오름차순 정렬된 정수의 배열'과 '정수'를 입력받아 '정수의 인덱스'를 리턴해야 한다.

- 부분적으로 정렬된 배열: 배열을 왼쪽 혹은 오른쪽으로 0칸 이상 순환 이동할 경우 완전히 정렬되는 배열
- 예시: [4, 5, 6, 0, 1, 2, 3]은 왼쪽으로 3칸 또는 오른쪽으로 4칸 순환 이동할 경우 완전히 정렬됩니다.
```javascript
let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
console.log(output); // --> 5

output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100);
console.log(output); // --> -1
```

## 문제 접근
처음에는 단순히 반복문을 돌려서 배열의 원소와 target과 같은지 확인하고, 같다면 인덱스인 i를 리턴, 다르면 -1을 리턴하면 되겠다고 생각했다.
```javascript
const rotatedArraySearch = function (rotated, target) {
  // 1. 반복문을 돌려서 타겟과 같은지 확인한다. 
  // 2. 다르면 -1 리턴, 같으면 i 값 리턴
  for(let i=0; i<rotated.length; i++) {
    if( rotated[i] === target ) {
      return i;
    }
  }
  return -1;
};
```
위 코드를 실행하면 원하는 인덱스는 추출이 가능하지만 테스트는 통과하지 못한다. 시간복잡도가 `O(N)`이 아닌 이진 탐색을 통해 `O(logN)`인 다른 방법을 생각해내야 했다.

><strong>O(log n) ?</strong><br/>
데이터 처리가 진행될 때마다 검색해야 하는 데이터의 양이 절반씩 떨어지는 알고리즘
대표적인 예시로 binary search(이진탐색)이 있다. 순차 검색에 비해 속도가 훨씬 빠르다.

## 문제 해결
```javascript
const rotatedArraySearch = function (rotated, target) {
  let left = 0,
    right = rotated.length - 1;

  while (left <= right) {
    let middle = parseInt((right + left) / 2);

    if (rotated[middle] === target) {
      return middle;
    }

    if (rotated[left] < rotated[middle]) {
      // 왼쪽 절반이 정렬되어 있는 상태
      if (target < rotated[middle] && rotated[left] <= target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      // 오른쪽 절반이 정렬되어 있는 상태
      if (target <= rotated[right] && rotated[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
};
```