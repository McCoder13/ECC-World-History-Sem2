var i = 0;
var txt = 'Beyond the Known World: Part 1';
var speed = 200;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("subtitle").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }