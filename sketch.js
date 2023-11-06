let sonidos = [];

function preload() {
  for (let i = 1; i < 9; i++) {
    sonidos[i] = loadSound("sonidos/" + i + ".mp3");
  }
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(presionado);
}

function presionado() {
  let r = Math.floor(random(1, 8));
  circle(mouseX, mouseY, 20);

  switch (r) {
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
    case 7:
      sonidos[7].play();
      break;
    case 8:
      sonidos[8].play();
      break;
  }
}

function draw() {}

function mouseDragged() {
  let r = Math.floor(random(1, 8));
  circle(mouseX, mouseY, 20);

  switch (r) {
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
    case 7:
      sonidos[7].play();
      break;
    case 8:
      sonidos[8].play();
      break;
  }
}

function keyPressed() {
  switch (key) {
    case "a":
      sonidos[1].play();
      break;
    case "s":
      sonidos[2].play();
      break;
    case "d":
      sonidos[3].play();
      break;
    case "f":
      sonidos[4].play();
      break;
    case "g":
      sonidos[5].play();
      break;
    case "h":
      sonidos[6].play();
      break;
    case "j":
      sonidos[7].play();
      break;
    case "k":
      sonidos[8].play();
      break;
  }
}
