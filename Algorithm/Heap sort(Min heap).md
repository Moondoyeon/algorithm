## 힙 정렬 개념
- 자료구조인 힙(Heap)의 사용하여 정렬을 수행하며 여기서는 최소 힙을 사용
- 입력 자료들을 최대 힙으로 구성(Build-min-Heap : 정렬되지 않은 입력 자료들로부터 최소 힙을 만듦)
- 최소 힙을 구성하는 과정에서 힙 특성을 유지하는 역할이 포함되어야 함(Min-Heapify : 힙 특성 유지)
- 구성된 최소 힙에서 RootNode부터 차례대로 힙에서 꺼내어 저장(Heap-Sort : 배열을 내부 정렬함)

(+) 힙 추가 개념
<br />힙(Heap): 최대 힙(Max heap)과 최소 힙(Min heap)이 존재

최대 힙은 부모 노드가 자식 노드보다 값이 큰 경우를, 최소 힙은 부모 노드가 자식 노드보다 값이 작은 경우를 말한다.
즉, 최대 힙의 rootNode는 힙 내에서 가장 큰 값, 최소 힙의 rootNode는 힙 내에서 가장 작은 값을 의미한다. 힙 전체를 통틀어 이 규칙이 꼭 유지되어야 한다.

일반적으로 힙 자료구조는 이진 트리로 구현한다.
이진 트리는 각각의 부모 노드가 오로지 두 개의 자식 노드(left, right)만 가질 수 있는 트리를 의미한다.
추가적으로 힙은 완전 이진 트리의 구조를 사용하는데, 트리의 가장 아래 층을 제외하고는 상단의 모든 레벨이 완전히 채워져야 한다.

또한, 힙은 이진 트리 자료구조 임에도 배열로 구현할 수 있다. 배열을 정렬하기 위해 먼저 계속 배열의 요소들을 insert해서 최소 힙을 만든 후에, 최소 힙의 루트 노드를 pop하고 Min-Heapify 특성을 유지하도록 재조정과정을 반복하면, 오름차순으로 정렬된 배열을 얻을 수 있다.

```javascript
// 최소 힙 구현
function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// heap내에서 parentIdx 구함
function getParentIdx(idx) {
  return Math.floor(( idx - 1 ) / 2);
}

// heap 삽입 구현
function insert(heap, item) {
  heap.push(item);
  if(heap.length > 1) {
    let curIdx = heap.length -1;
    let parIdx = getParentIdx(curIdx);
    while(parIdx >= 0 && heap[curIdx] < heap[parIdx]) {
      // 최대 힙과 부등호만 반대
      swap(curIdx, parIdx, heap);
      curIdx = parIdx;
      parIdx = getParentIdx(curIdx);
    }
  }
  return heap;
}

// heap 삭제 구현
// 항상 rootNode(최솟값)가 삭제되며, 제일 마지막 인덱스 값이 rootNode 자리에 위치하게 되고
// 자식 노드들과 크기 비교를 진행해서
// 최종적으로 삭제된 rootNode의 다음 최솟값이 rootNode 자리에 오른다.
function removeRoot(heap) {
  // 배열의 첫번째(최솟값)값과 배열의 마지막 값을 바꾼다.
  swap(0, heap.length-1, heap);
  // 배열의 최솟값 제거
  heap.pop();
  
  if(heap.length === 0) return [];

  // 최소 힙 특성 유지
  let curIdx;
  let minIdx = 0;
  while( curIdx !== minIdx) {
    curIdx = minIdx;
    let leftChildIdx = curIdx * 2 + 1;
    let rightChildIdx = curIdx * 2 + 2;
    if( leftChildIdx < heap.length && heap[leftChildIdx] < heap[minIdx]) {
      minIdx = leftChildIdx;
    }
    if( rightChildIdx < heap.length && heap[rightChildIdx] < heap[minIdx]) {
      minIdx = rightChildIdx;
    }
    swap(curIdx, minIdx, heap);
  }
  return heap;
}

const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

// heap SORT 구현
// removeRoot(heap)을 진행하면 rootNode는 항상 최솟값이므로
// heap이 빈 배열이 될 때까지 heap[0]을 result 배열에 넣어준다.
const heapSort = function (arr) {
  let minHeap = binaryHeap(arr);
  const result = [];
  while ( minHeap.length > 0) {
    result.push(minHeap[0]);
    minHeap = removeRoot(minHeap);
  }
  return result;
};
```