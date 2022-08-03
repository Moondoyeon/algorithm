## fibonacci

0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1이다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의한다.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

피보나치 수열 중 n번째 항의 수를 리턴해야 한다.

주의사항
- 재귀함수를 이용해 구현해야 한다.
- 반복문(for, while) 사용 금지.
- 함수 fibonacci가 반드시 재귀함수일 필요는 없다.

```javascript
// 방법1: O(2^N)
function fibonacci(n) {
  let fibonacci = function (n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
  };
}
```

이미 계산한 값들은 memo에 저장되었다가, 필요할 때 호출만 하면 되기 때문에 재연산할 필요가 없어 효율적이다.
```javascript
// 방법2: O(N) - memoization
let fibonacci = function (n) {
  const memo = [0, 1];
  const aux = (n) => {
    // 이미 해결한 적이 있으면, 메모해둔 정답을 리턴한다.
    if (memo[n] !== undefined) return memo[n];
    // 새롭게 풀어야하는 경우, 문제를 풀고 메모해둔다.
    memo[n] = aux(n - 1) + aux(n - 2);
    return memo[n];
  };
  return aux(n);
};
```

```javascript
// 방법2 변형
function fibonacci(n, m=[]) {
  let result = 0;
  if(m[n] !== undefined){
    return m[n] 
  }
  if(n<=1){
    return n
  }
  result = fibonacci(n-1,m) + fibonacci(n-2,m)
  m[n] = result;
  
  return result;
}
```