## Binary Heap
Binary Heap(이진 힙)은 노드의 값이 특정한 순서를 가지고 있는 완전 이진 트리(Complete Binary Tree)다.

완전 이진 트리는 마지막 레벨을 제외하고 모든 이진 트리의 레벨이 노드로 가득한 트리이다.

이진 힙은 부모 노드 값이 자식 노드 값보다 크냐 작냐에 따라 최대 힙(max heap), 최소 힙(min heap)으로 불린다.

arr를 입력 받았을 때 max heap의 순서로 정렬하는 알고리즘에 대해 학습한다.

- 두 요소의 인덱스를 바꾸는 swap
- 부모 노드의 인덱스를 알아내는 getParentIdx
- 힙에 요소를 정렬 방법에 맞춰 삽입하는 insert

위의 세 함수를 이용한다.


```javascript
function swap(idx1, idx2, arr) {
  // 구조 분해 할당 활용 -> 배열이 reference type이라 가능함
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function getParentIdx(idx) {
  return Math.floor( (idx - 1) / 2 );
};

function insert(heap, item) {
  heap.push(item);
  let curIdx = heap.length - 1;
  let parIdx = getParentIdx(curIdx);

  // 새 요소의 인덱스를 기준으로 해당 부모 요소와 크기를 비교한 swap을 통해 제자리 정렬
  // 새 요소가 현재 인덱스 기준으로 부모 요소보다 크면 while 구문 실행
  while( parIdx >= 0 && heap[curIdx] > heap[parIdx]) {
    // 부모 요소와 자리 swap
    swap(curIdx, parIdx, heap);
    // swap 후 새 요소의 idx는 부모 idx가 됨
    curIdx = parIdx;
    // 부모 idx는 swap 후 새 요소의 부모 Idx로 값을 다시 할당
    parIdx = getParentIdx(curIdx);
  }
  return heap;
};

function binaryHeap(arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};
```

### (+)두 변수 자리를 바꾸는 방법
1.임시 변수를 활용한 방법
```javascript
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
```
2. XOR 연산을 활용한 방법
```javascript
 // arr이 reference type이라 가능
 arr[idx1] ^= arr[idx2];
 arr[idx2] ^= arr[idx1];
 arr[idx1] ^= arr[idx2];
 ```

