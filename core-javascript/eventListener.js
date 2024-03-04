var flowers = ["🌸", "🌼", "🌺"];
var $ul = document.createElement("ul");

// $li 의 click 이벤트 리스너의 콜백 함수로 전달하던 익명 함수가 다른 곳에서도 반복적으로 쓰이는 코드라면?
// → 공통 함수로 쓸 수 있게 외부로 분리
//   (분리한 함수를 alertFlower 변수에 할당해줬다.)
var alertFlower = function (flower) {
  alert("your choice is " + flower);
};

flowers.forEach(function (flower) {
  var $li = document.createElement("li");
  $li.innerText = flower;
  // $li 의 click 이벤트 리스너의 콜백 함수로 외부 함수 전달 → 클로저 형성
  // 단, 여기서 문제는 각각의 li를 클릭하면 "🌸", "🌼", "🌺"이 아닌 [object MouseEvent]라는 값이 출력된다.
  // 왜?..
  // 아래 코드에서 콜백으로 전달한 외부 함수 alertFlower 함수의 인자에 대한 제어권을 addEventListener가 가진 상태.
  // addEventListener 는 콜백 함수를 호출할 때 첫 번쨰 인자에 'Event' 객체를 주입하기 때문.
  $li.addEventListener("click", alertFlower);
  $ul.appendChild($li);
});

document.body.appendChild($ul);
alertFlower(flowers[1]);
