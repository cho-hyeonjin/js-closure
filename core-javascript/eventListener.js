var flowers = ["🌸", "🌼", "🌺"];
var $ul = document.createElement("ul");

flowers.forEach(function (flower) {
  var $li = document.createElement("li");
  $li.innerText = flower;
  $li.addEventListener("click", function () {
    alert("your choice is " + flower); // 외부 함수의 변수 참조 - 클로저 형성, $li의 클릭 이벤트 리스너에 전달하는 콜백함수는 클로저 함수!
  });
});

document.body.appendChild($ul);
