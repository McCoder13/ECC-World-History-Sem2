var text = ["Welcome!", "¡Bienvenidos!"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 1500);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}

var ii = 0;
var txtt = 'English';
var speed = 400;

function typeWriterUno() {
  if (ii < txtt.length) {
    document.getElementById("uno").innerHTML += txtt.charAt(ii);
    ii++;
    setTimeout(typeWriterUno, speed);
  }
}

var i = 0;
var txt = 'Español';

function typeWriterDos() {
  if (i < txt.length) {
    document.getElementById("dos").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriterDos, speed);
  }
}
