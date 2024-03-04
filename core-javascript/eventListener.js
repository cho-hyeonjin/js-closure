var flowers = ["🌸", "🌼", "🌺"];
var $ul = document.createElement("ul");

var alertFlower = function (flower) {
  alert("your choice is " + flower);
};

flowers.forEach(function (flower) {
  var $li = document.createElement("li");
  $li.innerText = flower;
  // bind 메서드로 첫번째 인자를 null로 명시적으로 변경한다. (그러나 이렇게 되면 this에 null이 바인딩된다는 점과 이벤트 객체가 인자로 넘어오는 순서가 바뀐다는 점을 감안해야 한다.)
  $li.addEventListener("click", alertFlower.bind(null, flower));
  $ul.appendChild($li);
});

document.body.appendChild($ul);
alertFlower(flowers[1]);
