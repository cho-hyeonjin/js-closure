// 클로저란?
// 열린 람다식 내부의 자유 변슈를 묶인 변수로 만듦으로써
// 열린 람다식을 닫힌 람다식으로 만들어 주는 것
// ------------------------------------------------------------------------------
// 함수를 리턴하는 함수는 언제나 클로저를 형성한다.
// ------------------------------------------------------------------------------

// TODO : 객체 메서드로 클로저 구현하기
// 열린 람다식, 함수를 리턴하는 함수 createCounter
function createCounter() {
  // createCounter 함수의 내부 변수 count (현재는 자유 변수 상태)
  let count = 0;
  console.log(count, "나는 상태를 유지합니다.");

  // 리턴값으로 (함수가 아닌) 객체 리터럴 설정
  return {
    // count를 증가시키는 메서드 선언
    increment: function () {
      // 외부 환경(Lexical Environment)과 묶이는 코드, count 변수가 묶인 변수가 되는 순간
      count += 1;
      return count;
    },
    // 현재 count 값을 확일할 수 있는 메서드 선언
    getCurrentCount: function () {
      return count;
    },
  };
}
