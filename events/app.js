// dark background

function darkBg() {
  document.body.style.background = "#4d4d4d";
  let texts = document.getElementsByClassName("black-text");
  for (let text of texts) {
    text.style.color = "white";
  }
}
const whiteBGbutton = document.getElementById("whiteBGbtn");
whiteBGbutton.onclick = whiteBg;
function whiteBg() {
  document.body.style.background = "#ffffff";
  let texts = document.getElementsByClassName("black-text");
  for (let text of texts) {
    text.style.color = "black";
  }
}

//direct with annonymous function

document.getElementById("purpleBg").addEventListener("click", function () {
  document.body.style.background = "purple";
  let texts = document.getElementsByClassName("black-text");
  for (let text of texts) {
    text.style.color = "white";
  }
});
