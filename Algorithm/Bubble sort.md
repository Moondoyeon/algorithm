## BubbleSort

서로 인접한 두 원소를 검사하여 정렬하는 알고리즘
인접한 2개의 레코드를 비교하여 크기가 순서대로 되어 있지 않으면 서로 교환한다.

즉,  첫 번째 자료와 두 번째 자료를, 두 번째 자료와 세 번째 자료를, 세 번째와 네 번째를, … 이런 식으로 (마지막-1)번째 자료와 마지막 자료를 비교하여 교환하면서 자료를 정렬한다.

1회전을 수행하고 나면 가장 큰 자료가 맨 뒤로 이동하므로 2회전에서는 맨 끝에 있는 자료는 정렬에서 제외되고, 2회전을 수행하고 나면 끝에서 두 번째 자료까지는 정렬에서 제외된다. 이렇게 정렬을 1회전 수행할 때마다 정렬에서 제외되는 데이터가 하나씩 늘어난다.

### 특징
 - 구현이 매우 간단하다.
 - 하나의 요소가 가장 왼쪽에서 가장 오른쪽으로 이동하기 위해서는 배열에서 모든 다른 요소들과 교환되어야 한다.
 - 특히 특정 요소가 최종 정렬 위치에 이미 있는 경우라도 교환되는 일이 일어난다.
 - O(n^2)이기 때문에 성능이 좋지 않다.

```javascript
//방법1 (비효율적)
const bubbleSort = function (arr) {
  let N = arr.length;

  for(let i =0; i<N-1; i++) {
    for(let j=0; j<N-1-i; j++) {
      if(arr[j]>arr[j+1]) {
        let temp = arr[idx1];
         arr[idx1] = arr[idx2];
         arr[idx2] = temp;
      }
    }
  }

  return arr;
};
```

```javascript
//방법2
const swap = function (idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

let bubbleSort = function (arr) {
  let N = arr.length;

  for (let i = 0; i < N; i++) {
    // swap 횟수를 기록한다.
    // 어떤 요소도 swap되지 않은 경우, 배열은 정렬된 상태이다.
    let swaps = 0;

    // 매 반복(iteration)마다 i번째로 큰 수가 마지막에서 i번째 위치하게 된다.
    // 이미 정렬된 요소는 고려할 필요가 없으므로, 'j < N - 1 - i'만 비교하면 된다.
    for (let j = 0; j < N - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps++;
        swap(j, j + 1, arr);
      }
    }

    if (swaps === 0) {
      break;
    }
  }

  return arr;
};
```


```javascript
//방법2 변형
function bubbleSort(arr) {
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
}
```
```javascript
1.변수 i를 통해 배열의 마지막 지점에서 시작지점까지 순회하는 반복문을 만든다.
2.변수 j를 통해 배열의 0번째 요소부터 i-1번째 요소까지 순회하는 이중반복문을 만든다.
3.배열의 j번째 요소가 j+1번째 요소보다 크면, 두 요소의 위치를 바꾼다.(Swap)
4.만약 inner Loop에서 swap이 발생하지 않는다면? 모두 정렬된 것이므로 반복문 종료.
5.정렬된 배열을 반환한다.
```