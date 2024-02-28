// 클로저란?
// 열린 람다식 내부의 자유 변수를 묶인 변수로 만듦으로써
// 열린 람다식을 닫힌 람다식으로 만들어주는 것
// ------------------------------------------------------------------------------

// 기본 구현
function createCounter() {
  let count = 0;
  console.log(count, "나는 상태를 유지합니다.");

  return function () {
    count += 1;
    return count;
  };
}

const myCounter = createCounter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
