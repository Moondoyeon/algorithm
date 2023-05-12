function solution(n) {
  // DFS 깊이우선탐색, 매개변수 L : level
  // 재귀함수: 자기가 자신을 호출하는 함수

  // 스택에 쌓일때, 스택프레임에는 호출 당시 매개변수값, 복귀주소(자신이 호출됐던 위치), 지역변수도 같이 저장된다. <-이런 함수의 호출정보를 스택 프레임 이라 함
  // 스택에서 pop될때, 복귀주소로 이동한뒤 다음줄코드 실행  // D(0) => D(1) => D(2) =>D (3)
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(3);
}

solution(3);
