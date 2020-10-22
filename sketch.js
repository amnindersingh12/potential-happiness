var song;
var sliderRate;
var sliderPan;

function setup() {
    createCanvas(200, 200);
    song = loadSound("onekiss.mp3", loaded);
    song.setVolume(0.5);
    sliderRate = createSlider(0.5, 1.5, 1, 0.01);
    // sliderPan = createSlider(0, 1, 0.5, 0.01);

}

function loaded() {
    song.play();

}

function draw() {
    background(random(25));
    song.rate(sliderRate.value());

}