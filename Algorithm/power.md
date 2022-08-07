## power
두 수를 입력받아 거듭제곱을 리턴해야 한다.

- `Math.pow` 사용 금지
- `O(logN)`을 만족해야 한다.
- 나머지를 구하는 이유는 계산 결과가 컴퓨터로 나타낼 수 있는 수의 범위를 넘을 수 있기 때문이다. 하지만 모든 연산이 끝난 뒤에 그 결과를 94,906,249로 나누려고 해서는 안 된다. 연산 중간에도 이 범위를 넘을 수 있기 때문에, 연산을 할 때마다 나머지를 구하고 그 결과에 연산을 이어가야 한다.

```javascript
let output = power(3, 40);
console.log(output); // --> 19334827
```

시간 복잡도를 고려하지 않는다면 다음과 같이 풀 수 있다. 
```javascript
function power(base, exponent) {
  let result = 1;

  for(let i = 0; i < exponent; i++) {
    result = (result * base) % 94906249;
  }

  return result;
}
```
`exponent` 만큼 곱하되, 매 연산마다 94,906,249로 나눠준다.
그러나 이는 시간복잡도 `O(logN)`를 만족하지 못한다.
그렇다면 이를 만족하기 위해서는 어떻게 해야할까. 
먼저 `O(logN)`의 복잡도를 가지는 알고리즘은 무엇일까? 라는 질문으로 접근해야 한다. 이 복잡도를 가진다는 말은 <strong>연산을 거듭할수록 데이터의 양이 줄어든다</strong>는 뜻이다. 그렇다면, 연산을 실행할 때마다 데이터의 양도 줄어드는 알고리즘으로 계산해보자

```javascript
function power(base, exponent) {
  if (exponent === 0) return 1;

  const half = parseInt(exponent / 2);
  const temp = power(base, half);
  const result = (temp * temp) % 94906249;

  if (exponent % 2 === 1) return (base * result) % 94906249;
  else return result;
}
```
이는 다음과 같은 거듭제곱의 특징을 이용한 알고리즘이다.
![](https://velog.velcdn.com/images/mmmdo21/post/133bdf60-2691-4bad-bd20-2cb2897be7e7/image.png)

최대치의 절반값을 구해서 서로 곱해준다면 원하는 결과가 도출된다. 이 점을 이용해서 데이터의 절반에 적용하고, 또 그걸 위해서 절반에 적용하기를 반복한다. 
예를 들면 2^8을 아래와 같이 작은 단위의 문제로 쪼갤 수 있다.
![](https://velog.velcdn.com/images/mmmdo21/post/26a767ff-a284-44ae-bab7-156a48b87318/image.png)