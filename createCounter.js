// 클로저란?
// 열린 람다식 내부의 자유 변슈를 묶인 변수로 만듦으로써
// 열린 람다식을 닫힌 람다식으로 만들어 주는 것
// ------------------------------------------------------------------------------
// 함수를 리턴하는 함수는 언제나 클로저를 형성한다.
// ------------------------------------------------------------------------------
// 클로저의 형성은
// 1) 변수를 은닉하고,
// 2) 상태를 유지하는 데에
// 매우 중요한 역할을 한다.
// ------------------------------------------------------------------------------

// TODO : 객체 메서드로 클로저 구현하기
function createCounter() {
  let count = 0;
  console.log(count, "나는 상태를 유지합니다.");

  return {
    increment: function () {
      count += 1;
      return count;
    },
    getCurrentCount: function () {
      return count;
    },
  };
}

const myCounter = createCounter();
const myCounter2 = createCounter();
myCounter.increment();
myCounter.increment();
myCounter2.increment();
myCounter2.increment();
myCounter2.increment();
console.log(myCounter.getCurrentCount());
console.log(myCounter2.getCurrentCount());
