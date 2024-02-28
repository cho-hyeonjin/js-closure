// 클로저란?
// 열린 람다식 내부의 자유 변슈를 묶인 변수로 만듦으로써
// 열린 람다식을 닫힌 람다식으로 만들어 주는 것
// ------------------------------------------------------------------------------

// 콜백 함수로 클로저 구현하기
function createCounter(callback) {
  let count = 0;
  console.log(count, "나는 상태를 유지합니다.");

  return function () {
    count += 1; // ✅

    callback(count);
  };
}

const myCounter = createCounter(function (currentCount) {
  console.log("현재 카운트:", currentCount);
});

myCounter();
myCounter();
myCounter();
