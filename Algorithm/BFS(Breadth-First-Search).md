## 너비우선탐색 BFS(Breadth First Search)
![](https://velog.velcdn.com/images/mmmdo21/post/9fd6f306-67d0-4919-b3e9-ed477caf1d4e/image.png)
<br />
시작점에 인접한 정점을 차례대로 모두 방문하고, 방문했던 정점을 시작점으로 해서 다시 인접한 정점들을 차례대로 모두 방문하는 방법
(여기서 인접하다는 의미는 두 정점이 하나의 간선으로 연결되어 있다는 의미이다)


- 시작 정점으로부터 가까운 정점을 먼저 방문하고, 멀리 떨어져 있는 정점을 나중에 방문하는 순회방법이다.
- 시작점과 연결된 모든 정점들을 방문하는 완전 탐색이다.
- 깊게(deep)탐색하기 전에 넓게(wide) 탐색한다.
- 주로 두 노드 사이의 최단 경로 혹은 임의의 경로를 찾고 싶을 때 사용하는 방법이다. (e.g 서울에서 부산으로 가는데 거쳐야 하는 최소 정거장의 수, 길찾기)
- 인접 정점을 방문하기 위해서 자료구조 Queue를 사용한다. 즉, DFS는 stack 자료구조를 활용해 구현했다면, BFS는 queue 활용한다.

### Queue
Queue는 선입선출(FIFO, First In First Out), 먼저 들어간 요소가 먼저 나오는 구조이다.
현재 정점과 인접한 모든 정점을 큐에 넣고, 다 넣으면 큐 앞에서 새로운 정점을 꺼내서 인접한 정점을 큐에 넣는 작업을 계속한다. 시작점과 연결된 모든 정점을 넣을 때 까지.
재귀적으로 동작하지 않는다는 특징이 있다.

### BFS의 장점
- 노드의 수가 적고 깊이가 얕은 경우 빠르게 동작할 수 있다.
- 단순 검색 속도가 DFS보다 빠르다.
- 최단 경로가 존재한다면 어느 한 경로가 무한히 깊어진다고 해도 최단 경로를 반드시 찾을 수 있다.
### BFS의 단점
- 노드의 수가 늘어나면 탐색해야 하는 노드 또한 많아지기 때문에 비현실적이다.
- 재귀호출의 DFS와는 달리 다음에 탐색할 정점들을 큐에 저장해야 하므로 저장공간이 많이 필요하다.

## 문제
임의의 tree를 구성하는 노드 중 하나의 `Node` 객체를 입력받아, 해당 노드를 시작으로 너비 우선 탐색(BFS, Breadth First Search)하여, 탐색되는 순서대로 노드의 값이 담긴 배열을 리턴해야 한다.

### 인자 1 : node
- 'value', 'children' 속성을 갖는 객체 (Node)
- 'node.value'는 number 타입
- 'node.children'은 Node를 요소로 갖는 배열

```javascript
let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5, 7, 6]
```

```javascript
let bfs = function (node) {
  let queue = [node]; // 조회할 노드를 순차적으로 넣는다.
  const values = [];
  while (queue.length > 0) { // 큐가 소진될 때까지(조회할 노드가 없을때까지)
    const head = queue[0]; // 0번째 노드를 지정한다.
    queue = queue.slice(1); 

    values.push(head.value); // 지정한 노드의 값을 결과에 저장한다.

    head.children.forEach((child) => queue.push(child)); // 자식 노드들을 순차적으로 Queue에 쌓아준다.
  }
  return values;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
```
### BFS의 탐색 과정 자세히 
BFS는 방문 노드의 인접한 노드를 큐에 저장하는 것이 DFS와 다른 점이다. 방문했다는 정보를 남기는 visited 배열은 동일하게 사용한다.
![](https://velog.velcdn.com/images/mmmdo21/post/f745c508-bfbf-4fb8-b46d-63ad7c39594e/image.png)

위 그림에서 BFS(너비 우선 탐색)을 진행한다면, 시작점을 1라고 하였을 때 1-2-3-4-5-7-6 순으로 탐색하게 된다.
```
a) 1을 큐에 넣는다.(enQueue)
b) 1을 방문했다고 표시하고 1을 deQueue한 뒤 인접 노트 2,3을 enQueue 한다.
c) 큐의 맨 앞에 있던 2를 방문표시하고 deQueue한 뒤 2의 인접노드 4,5를 enQueue한다.
d) 큐의 맨 앞에 있던 3을 방문표시하고 deQueue한 뒤 3의 인접노드 7을 enQueue한다. 
e) 큐의 맨 앞에 있던 4를 방문표시하고 deQueue한 뒤 4의 인접노드 6을 enQueue한다.
f) 큐의 맨 앞에 있던 5를 방문표시하고 deQueue하고, 5는 인접노드가 없으므로 enQueue는 없다.
g) 큐의 맨 앞에 있던 7을 방문표시하고 deQueue하고, 7는 인접노드가 없으므로 enQueue는 없다.
i) 큐의 맨 앞에 있던 6을 방문표시하고 deQueue하고, 6은 인접노드가 없으므로 enQueue는 없다.
```
```
Queue 변천 과정
[1]
[2,3]
[3,4,5]
[4,5,7]
[5,7,6]
[7,6]
[6]
[]
```