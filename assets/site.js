// 乘時 website: the only script. Tapping a period in the example dial shows its reason, like in the app;
// the language menu closes on a click outside.
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
// Language menu (a <details>): close it on a click outside or Escape.
document.querySelectorAll(".lang-menu").forEach(function (menu) {
  document.addEventListener("click", function (e) { if (menu.open && !menu.contains(e.target)) menu.open = false; });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.open) { menu.open = false; menu.querySelector("summary").focus(); }
  });
});
