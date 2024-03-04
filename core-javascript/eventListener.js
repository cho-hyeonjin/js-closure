var flowers = ["🌸", "🌼", "🌺"];
var $ul = document.createElement("ul");

// 이벤트 리스너의 첫번째 인자로 이벤트 객체가 주입되지 않게 하기 위해 (li의 클릭 이벤트 리스너의 콜백으로 들어온 함수를 실행하면 flowers의 이모지가 넘어와야 하는데 이벤트 객체가 넘어오기 때문에)
// bind로 첫번째 인자에 null을 지정하면 위의 문제는 해결되지만 this가 null로 지정되는 문제와 이벤트 객체가 인자로 넘어오는 순서가 바뀐다는 문제가 발생
// 그래서 고차함수로 구현 (고차함수는? 함수를 인자로 받거나 함수를 리턴하는 함수)
// 기존 alertFlower → alertFlowerBuilder로 변경 (OuterFunction)
var alertFlowerBuilder = function (flower) {
  // 기존 return 없이 바로 alert("your choice is " + flower); → alertFlowerBuilder가 리턴하는 클로저 함수 (Inner Function)으로 묶어서 alert("your choice is " + flower);
  return function () {
    // 외부 함수의 변수 참조 → 클로저 형성
    alert("your choice is " + flower);
  };
};

flowers.forEach(function (flower) {
  var $li = document.createElement("li");
  $li.innerText = flower;

  // 다시 $li의 click 이벤트 리스너로 alertFlowerBuilder(flower) 즉, 외부함수 전달
  $li.addEventListener("click", alertFlowerBuilder(flower));
  $ul.appendChild($li);
});

document.body.appendChild($ul);
alertFlower(flowers[1]);
