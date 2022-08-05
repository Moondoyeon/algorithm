## tiling

세로 길이 2, 가로 길이 n인 2 x n 보드가 있습니다. 2 x 1 크기의 타일을 가지고 이 보드를 채우는 모든 경우의 수를 리턴해야 합니다.

```javascript
let output = tiling(2);
console.log(output); // --> 2

output = tiling(4);
console.log(output); // --> 5
/* 
2 x 4 보드에 타일을 놓는 방법은 5가지
각 타일을 a, b, c, d로 구분

2 | a b c d
1 | a b c d 
------------

2 | a a c c
1 | b b d d 
------------

2 | a b c c
1 | a b d d 
------------

2 | a a c d
1 | b b c d 
------------

2 | a b b d
1 | a c c d 
------------
*/
```

2 x n 타일 문제는 3번째 이후부터는 피보나치 수열을 이룬다. 

즉, 2 x 4 보드에 타일을 놓는 방법은 아래 두 가지 방법을 더한 결과와 같다.<br>
  (1) 2 x 3 보드에 타일을 놓는 방법<br>
  (2) 2 x 2 보드에 타일을 놓는 방법

```
2 x 4 보드에 타일을 놓는 방법은 5가지다.
각 타일을 a, b, c, d로 구분한다.
아직 타일이 놓이지 않는 부분은 -로 표기한다.
타일을 놓는 방법은 가장 왼쪽부터 세로로 놓거나 가로로 놓는 것으로 시작한다.

1) 세로로 놓는 법
  2 | a - - -
  1 | a - - -
  ------------
2) 가로로 놓는 법
타일을 가로로 놓게 되면, 그 바로 아래에는 가로로 놓을 수 없다.
  2 | a a - -
  1 | b b - -
  ------------
이때, 타일이 아직 *놓이지 않은 부분*은 사실 크기만 다를뿐 같은 종류의 문제라는 것을 알 수 있다.
```

따라서, 2 x n 타일 문제는 재귀함수로 풀 수 있다.
```javascript
// O(2^N)
let tiling = function (n) {
  if (n <= 2) return n;
  return tiling(n - 1) + tiling(n - 2);
};
```

```javascript
let tiling = function(n, m=[]) {
  let result;
  if(m[n] !== undefined) {
    return m[n]
  }
  if(n <= 3) {
    return n
  }
  result = tiling(n-1, m) + tiling(n-2, m)
  m[n] =result;

  return result;
}
```

### memoization: O(N)
```javascript
let tiling = function (n) {
  const memo = [0, 1, 2];

  // 재귀를 위한 보조 함수(auxiliary function)을 선언)
  const aux = (size) => {
    // 이미 해결한 문제는 풀지 않는다.
    if (memo[size] !== undefined) return memo[size];
    if (size <= 2) return memo[n];
    memo[size] = aux(size - 1) + aux(size - 2);
    return memo[size];
  };
  return aux(n);
};
```
### tabulation: O(N)
tabulation은 데이터를 테이블에 정리하면서 bottom-up 방식으로 해결하는 기법을 말한다.
```javascript
let tiling = function (n) {
  const memo = [0, 1, 2];
  if (n <= 2) return memo[n];
  for (let size = 3; size <= n; size++) {
    memo[size] = memo[size - 1] + memo[size - 2];
  }
  return memo[n];
};
```
### slicing window: O(N)
slicing window은 필요한 최소한의 데이터만을 활용하는 것을 말한다.
크기 n의 문제에 대한 해결을 위해 필요한 데이터는 오직 2개뿐이라는 사실을 이용한다.
```javascript
let tiling = function (n) {
  let one = 1,
    two = 2;
  if (n <= 2) return n;
  for (let size = 3; size <= n; size++) {
    // 앞의 두 수를 더해 다음 수를 구할 수 있다.
    const next = one + two;
    // 다음 문제로 넘어가기 위해 필요한 2개의 데이터의 순서를 정리한다.
    one = two;
    two = next;
  }
  return two;
};
```