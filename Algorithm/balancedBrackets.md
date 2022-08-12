## 문제 : balancedBrackets
문자열을 입력받아 문자열 내의 모든 괄호의 짝이 맞는지 여부를 리턴해야 합니다.

다음 단계에 맞춰 함수를 작성해 보세요

괄호의 종류를 단 한가지로 한정합니다.
괄호의 종류를 늘려 모든 종류의 괄호에도 작동하도록 합니다.
괄호를 제외한 문자열이 포함된 경우에도 작동하도록 합니다.
```
let output = balancedBrackets('(');
console.log(output); // // -> false

output = balancedBrackets('()');
console.log(output); // --> true
```

```javascript
// 열린 괄호 개수와 닫힌 괄호 개수를 세서 개수가 같으면 짝이 맞고, 다르면 짝이 다르다.(개수에 초점)
const balancedBrackets = function (str) {
  let opener = '(';
  let closer = ')';
  let openerNum = 0;
  let closerNum = 0;

  for(let i =0; i<str.length; i++) {
    if(str[i] === opener) {
      openerNum++;
    }
    if(str[i] === closer) {
      // 닫는 괄호가 열린 괄호보다 먼저 온 경우, 짝을 이룰 수 없음
      if(openerNum === 0 || openerNum === closerNum) {
        return false;
      } else {
        closerNum++;
      }
    }
  }
  if(openerNum !== closerNum) {
    return false;
  }
  return true;
};
```
```javascript
const balancedBrackets = function(str) {
  const stack = []; // 열린 괄호에 한해서 push, pop
  const opener = '(';
  const closer = ')';

  for(let i = 0; i < str.length; i++) {
    if(str[i] === opener) {
      stack.push(str[i]);
    } else if(str[i] === closer) {
      const target = stack.pop();
      if(target !== opener) {
        return false;
      }
    }
  }

  return stack.length === 0
}
```


## Advanced
모든 종류의 괄호(, ), {, }, [, ]가 포함된 문자열을 입력빋아 모든 괄호의 짝이 맞는지 여부를 리턴해 보세요.

```
let output = balancedBrackets('[](){}');
console.log(output); // --> true

output = balancedBrackets('[({})]');
console.log(output); // --> true

let output3 = balancedBrackets('[(]{)}');
console.log(output); // --> false
```

```javascript
const balancedBrackets = function (str) {
  const arr = str.split('');
  const stack = [];
  const open1 = '(';
  const open2 = '{';
  const open3 = '[';
  const close1 = ')';
  const close2 = '}';
  const close3 = ']';

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === open1) {
      stack.push(arr[i]);
    }
    if(arr[i] === close1) {
      const target = stack.pop();
      if(target !== open1) {
        return false;
      }
    }

    if(arr[i] === open2) {
      stack.push(arr[i]);
    }
    if(arr[i] === close2) {
      const target = stack.pop();
      if(target !== open2) {
        return false;
      }
    }

    if(arr[i] === open3) {
      stack.push(arr[i]);
    }
    if(arr[i] === close3) {
      const target = stack.pop();
      if(target !== open3) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
```

```javascript
const balancedbrackets = function (str) {
  const stack = [];
  const opener = {
    '(':')',
    '{':'}',
    '[':']',
  };
  const closer = ')}]';

  for(let i = 0; i < str.length; i++) {
    if(str[i] in opener) {
      stack.push(str[i]);
    } else if (closer.includes(str[i])) {
      const target = stack.pop();
      const pair = opener[target];
      if(pair !== str[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
```