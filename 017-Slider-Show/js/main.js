//* Start

let imgElemnt = document.querySelector("#img-show");
let icons = document.querySelectorAll(".icon");
let i = 0;
let images = ["Images/bk-1.jpg", "Images/bk-2.jpg", "Images/bk-3.jpg"];
icons.forEach(function (e) {
  e.addEventListener("click", function (btn) {
    let style = btn.currentTarget.classList;
    if (style.contains("right")) {
      next();
    }
    if (style.contains("left")) {
      previous();
    }
  });
});

function next() {
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  imgElemnt.setAttribute("src", images[i]);
  console.log(i);
}
function previous() {
  if (i <= 0) {
    i = 1;
  } else {
    i--;
  }
  imgElemnt.setAttribute("src", images[i]);
  console.log(i);
}