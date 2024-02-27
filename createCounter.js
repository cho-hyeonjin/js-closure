// 클로저란?
// 열린 람다식 내부의 자유 변수를 묶인 변수로 만듦으로서
// 열린 람다식 → 닫힌 람다식으로 만들어주는 것
// ------------------------------------------------------------------------------

// (After) 클로저를 형성하는 익명 함수를 리턴하는 닫힌 람다식 createCounter
function createCounter() {
  // 묶인 변수 (종속/제한 변수) - createCounter 내부의 익명 함수에 종속
  let count = 0;
  console.log(count, "나는 상태를 유지합니다.");

  // 클로저의 핵심이 될 익명 함수 - 외부 스코프의 열린 변수 (자유 변수)를 참조, 데이터 재할당 하여 리턴
  // 즉, 클로저를 형성하는 익명 함수
  // 즉, 클로저를 형성하는 익명 함수(이하 클로저라 부르겠음.)를 리턴
  return function () {
    count += 1;
    return count;
  };
}
// 여기까지 정리: createCounter 함수는 클로저를 형성하는 익명함수를 리턴한다.
// 여기까지 정리: createCounter 함수는 클로저(를 형성하는 익명함수)를 리턴한다.

// 닫힌 람다식 createCounter를 닫힌 람다식 외부 scope에서 호출
const myCounter = createCounter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
// myCounter 함수를 실행하면, createCounter가 리턴하는 클로저의 count값을 출력하게 된다.

// 여기까지 정리: 1) 클로저를 사용함으로써 count 변수에 접근하여 값을 변경했음에도 원본 count의 상태를 유지할 수 있었다.
//            2) 클로저로 인해 count 변수가 가비지 컬렉션 되지 않고 메모리에 남아있었기에
//               createCounter 함수가 종료된 후 myCounter를 호출했음에도 createCouner 함수 내부의 변수를 참조할 수 있었다.
// 이제 다시 보는 MDM의 클로저 정의 : 클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다.
