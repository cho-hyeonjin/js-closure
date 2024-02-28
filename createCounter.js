// 클로저란?
// 열린 람다식 내부의 자유 변슈를 묶인 변수로 만듦으로써
// 열린 람다식을 닫힌 람다식으로 만들어 주는 것
// ------------------------------------------------------------------------------
// 함수를 리턴하는 함수는 언제나 클로저를 형성한다.
// ------------------------------------------------------------------------------

// TODO : 객체 메서드로 클로저 구현하기
// 열린 람다식, 함수를 리턴하는 함수 createCounter (클로저를 리턴하는 함수)
function createCounter() {
  // 클로저를 반환하는 함수의 지역 변수 count (현재는 자유 변수 상태)
  let count = 0;
  console.log(count, "나는 상태를 유지합니다.");

  // 리턴값으로 (함수가 아닌) 객체 리터럴 설정
  return {
    // count를 증가시키는 메서드 increment 선언 (setter) --- 클로저(를 형성하는 메서드)
    increment: function () {
      // 외부 환경(Lexical Environment)과 묶이는 코드, count 변수가 묶인 변수가 되는 순간
      count += 1;
      return count;
    },
    // 현재 count 값을 확일할 수 있는 메서드 선언 (getter) --- 클로저(를 형성하는 메서드)
    getCurrentCount: function () {
      return count;
    },
    // increment 메서드와 getCurrentCount 메서드는 클로저(를 형성하는) 메서드
  };
}

// 클로저를 리턴하는 함수 createCounter 의 실행 결과가 할당된 상수 myCounter
// 즉, myCounter 함수는 클로저 함수.
// myCounter 객체와 myCounter2 객체는 모두 createCounter 함수로 찍어낸 인스턴스로, 서로의 상태에 영향을 주지 않고 각자 독립적으로 존재. ∴ 각자의 count 값 유지
const myCounter = createCounter();
const myCounter2 = createCounter();
// myCounter 객체의 increment 메서드 (setter) 를 호출해서 count 값 증가
myCounter.increment(); // count = 1
myCounter.increment(); // count = 2
myCounter2.increment(); // count = 1
myCounter2.increment(); // count = 2
myCounter2.increment(); // count = 3
// 위 두 count 값은 평행 세계의 count 값처럼 각각 존재하는 독립된 값.
// console.log()의 파라미터로 myCounter 객체의 getCurrentCount 메서드 (getter) 호출 결과를 전달하여 현재의 count 값 확인
console.log(myCounter.getCurrentCount()); // 2
console.log(myCounter2.getCurrentCount()); // 3
