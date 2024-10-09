const x = document.getElementById("box").offsetWidth;
const y = document.getElementById("box").offsetHeight;
const height = window.innerHeight - y;
const width = window.innerWidth - x;
const myAudio = document.getElementById("audio");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function changeBtn() {
  let valueHeight = getRandomInt(0, height);
  let valueWidth = getRandomInt(0, width);
  document.getElementById("box").style.marginTop = valueHeight + "px";
  document.getElementById("box").style.marginLeft = valueWidth + "px";
}
function playAudio() {
  myAudio.play();
}
