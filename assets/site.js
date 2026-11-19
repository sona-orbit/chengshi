// 乘時 website: the only script. Tapping a period in the example dial shows its reason, like in the app.
document.querySelectorAll("[data-hours]").forEach(function (box) {
  var why = box.querySelector(".why");
  box.querySelectorAll(".hr").forEach(function (b) {
    b.addEventListener("click", function () {
      box.querySelectorAll(".hr").forEach(function (o) { o.setAttribute("aria-pressed", o === b ? "true" : "false"); });
      var name = b.querySelector("b").textContent + " " + b.querySelector("small").textContent;
      why.innerHTML = "";
      var strong = document.createElement("b");
      strong.textContent = name;
      why.appendChild(strong);
      why.appendChild(document.createTextNode(" " + b.getAttribute("data-why")));
    });
  });
});
