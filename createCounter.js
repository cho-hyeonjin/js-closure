// 클로저란?
// 열린 람다식 내부의 자유 변슈를 묶인 변수로 만듦으로써
// 열린 람다식을 닫힌 람다식으로 만들어 주는 것
// ------------------------------------------------------------------------------

// TODO: 콜백 함수로 클로저 구현하기
// 클로저를 형성하는 익명 함수를 리턴하는 닫힌 람다식 createCounter
// callback 파라미터에는 사용자 정의 함수(콜백 함수)가 인수로 전달된다.
function createCounter(callback) {
  // createCounter 함수 내부의 묶인 변수 count
  let count = 0;
  console.log(count, "나는 상태를 유지합니다.");

  // 클로저를 형성하는 creatorCounter 함수의 내부 함수(익명 함수)
  return function () {
    // 외부 스코프의 변수 count에 접근하여 값 변경(count가 자유변수에서 묶인 변수가 되는 순간)
    count += 1; // ✅

    // 외부 함수에서 인수로 전달받은 콜백 함수(사용자 정의 함수)를 호출
    // 콜백 함수의 인수로 외부 함수의 내부 변수 count를 전달
    callback(count);
  };
  // → 클로저를 형성하는 createCounter 함수의 내부 함수(클로저) 실행 결과는?
  //   createCounter 함수(외부 함수)의 파라미터로 전달받은 콜백 함수 실행 결과
}
// → createCounter 함수 실행 결과는?
//   클로저를 형성하는 내부의 익명 함수 리턴 == 클로저 함수 리턴

// createCount 함수의 인수로 파라미터를 하나 가지는 익명함수를 전달하며 호출
// createCounter 함수가 리턴하는 값을 mycCounter에 할당
const myCounter = createCounter(function (currentCount) {
  console.log("현재 카운트:", currentCount);
});
// → myCounter에 할당된 값은?
//   createCounter 함수에 사용자 정의 익명 함수(콜백 함수)를 인수로 전달하며 실행한 결과

myCounter();
// → myCounter 함수 실행 결과는?
//   createCounter 함수가 리턴하는 클로저
//   즉,
//   function (✅) {
//     console.log("현재 카운트:", ✅);
//   }
myCounter();
myCounter();
