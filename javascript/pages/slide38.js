var i = 0;
var txt = "Effect On The World: Part 3";
var speed = 200;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("subtitle").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }