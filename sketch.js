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
  let r = Math.floor(random(8));
  circle(mouseX, mouseY, 20);

  switch (r) {
    case 1:
      sonidos[1].play(1);
      break;
    case 2:
      sonidos[2].play(2);
      break;
    case 3:
      sonidos[3].play(3);
      break;
    case 4:
      sonidos[4].play(4);
      break;
    case 5:
      sonidos[5].play(5);
      break;
    case 6:
      sonidos[6].play(6);
      break;
    case 7:
      sonidos[7].play(7);
      break;
    case 8:
      sonidos[8].play(8);
      break;
  }
}

function draw() {}

function mouseDragged() {
  let r = Math.floor(random(8));
  circle(mouseX, mouseY, 20);

  switch (r) {
    case 1:
      sonidos[1].play(1);
      break;
    case 2:
      sonidos[2].play(2);
      break;
    case 3:
      sonidos[3].play(3);
      break;
    case 4:
      sonidos[4].play(4);
      break;
    case 5:
      sonidos[5].play(5);
      break;
    case 6:
      sonidos[6].play(6);
      break;
    case 7:
      sonidos[7].play(7);
      break;
    case 8:
      sonidos[8].play(8);
      break;
  }
}

function keyPressed() {
  switch (key) {
    case "a":
      sonidos[1].play(1);
      break;
    case "s":
      sonidos[2].play(2);
      break;
    case "d":
      sonidos[3].play(3);
      break;
    case "f":
      sonidos[4].play(4);
      break;
    case "g":
      sonidos[5].play(5);
      break;
    case "h":
      sonidos[6].play(6);
      break;
    case "j":
      sonidos[7].play(7);
      break;
    case "k":
      sonidos[8].play(8);
      break;
  }
}

// let osc, playing, freq, amp;

// function setup() {
//   let cnv = createCanvas(100, 100);
//   cnv.mousePressed(playOscillator);
//   osc = new p5.Oscillator("sine");
// }

// function draw() {
//   background(220);
//   freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
//   amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

//   text("tap to play", 20, 20);
//   text("freq: " + freq, 20, 40);
//   text("amp: " + amp, 20, 60);

//   if (playing) {
//     // smooth the transitions by 0.1 seconds
//     osc.freq(freq, 0.1);
//     osc.amp(amp, 0.1);
//   }
// }

// function playOscillator() {
//   // starting an oscillator on a user gesture will enable audio
//   // in browsers that have a strict autoplay policy.
//   // See also: userStartAudio();
//   osc.start();
//   playing = true;
// }

// function mouseReleased() {
//   // ramp amplitude to 0 over 0.5 seconds
//   osc.amp(0, 0.5);
//   playing = false;
// }
