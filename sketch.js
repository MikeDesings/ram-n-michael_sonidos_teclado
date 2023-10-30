let sonidos = [];

function preload() {
  for (let i = 0; i < 7; i++) {
    sonidos[i] = loadSound("sonidos/" + i + ".mp3");
  }
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(presionado);
}

function presionado() {
  let r = Math.floor(random(7));
  circle(mouseX, mouseY, 20);

  switch (r) {
    case 0:
      sonidos[0].play();
      break;
    case 1:
      sonidos[1].play();
      break;
    case 2:
      sonidos[2].play();
      break;
    case 3:
      sonidos[3].play();
      break;
    case 4:
      sonidos[4].play();
      break;
    case 5:
      sonidos[5].play();
      break;
    case 6:
      sonidos[6].play();
      break;
  }
}

function draw() {}
function mouseDragged() {
  let r = Math.floor(random(7));
  circle(mouseX, mouseY, 20);

  switch (r) {
    case 0:
      sonidos[0].play();
      break;
    case 1:
      sonidos[1].play();
      break;
    case 2:
      sonidos[2].play();
      break;
    case 3:
      sonidos[3].play();
      break;
    case 4:
      sonidos[4].play();
      break;
    case 5:
      sonidos[5].play();
      break;
    case 6:
      sonidos[6].play();
      break;
  }
}

function keyPressed() {
  switch (key) {
    case "a":
      sonidos[0].play();
      break;
    case "s":
      sonidos[1].play();
      break;
    case "d":
      sonidos[2].play();
      break;
    case "f":
      sonidos[3].play();
      break;
    case "g":
      sonidos[4].play();
      break;
    case "h":
      sonidos[5].play();
      break;
    case "j":
      sonidos[6].play();
      break;
  }
}
