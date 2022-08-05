## isSubsetOf

두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.

```javascript
let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true

sample = [6, 7];
output = isSubsetOf(base, sample);
console.log(output); // --> false

base = [10, 99, 123, 7];
sample = [11, 100, 99, 123];
output = isSubsetOf(base, sample);
console.log(output); // --> false
```

처음 이 문제를 보자마자 든 생각은, 객체를 이용해서 풀면 되겠다 였다. 객체 `base`를 만들고 `sample`의 원소가 객체 `base`에 존재하지 않으면 `false`를 반환하는 식으로 말이다. 

```javascript
const isSubsetOf = function (base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  let obj = {};
  for(let el of base) {
    obj[el]= el
  }

  for(let el of sample) {
    if(!obj[el]) {
      return false;
    }
  }
  return true;
};
```
테스트를 돌렸을 때 실행시간이 초과되진 않았지만, 만약에 주어진 `base` 배열의 길이가 1억이라면? 배열을 객체로 변환하는 과정이 비효율적이지 않을까 라는 생각이 들었다. 그래서 다른 풀이를 분석해보았다.

```javascript
// 풀이 1
const isSubsetOf = function (base, sample) {
  // O(M * N), 실행시간 초과
 return sample.every((item) => base.includes(item));
}
  ```

```javascript
// 풀이 2
const isSubsetOf = function (base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);
  
  for(let i = 0; i < base.length; i++) {
    // base원소와 sample의 0번째 인덱스 값이 같다면
    if(base[i] === sample[0]) {
      // sample의 0번째 인덱스 값을 제거한다.
      let num = sample.shift();
    }
    // 모든 sample 원소가 제거됐다면 true
    if(sample.length === 0) {
      retrun true;
    }
  }
  return false;
};
```

```javascript
// 풀이 3
const isSubsetOf = function (base, sample) {
  // 각 배열을 정렬: O(N * logN), O(M * logM)
  // N >= M 이므로, O(N * logN)
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  const findItemInSortedArr = (item, arr, from) => {
    for (let i = from; i < arr.length; i++) {
      // sample 원소와 base 원소가 같다면 인덱스를 반환
      if (item === arr[i]) return i;
      else if (item < arr[i]) return -1;
    }
    // sample원소가 base원소와 같지 않거나, sample원소 값이 base의 모든 원소보다 크다면 부분집합이 아니므로 -1 반환
    return -1;
  };

  let baseIdx = 0;
  for (let i = 0; i < sample.length; i++) {
    baseIdx = findItemInSortedArr(sample[i], base, baseIdx);
    if (baseIdx === -1) return false;
  }
  return true;
};
```
