var song;
var sliderRate;
var sliderPan;
var button;

function setup() {
    createCanvas(200, 200);
    song = loadSound("onekiss.mp3", loaded);
    button = createButton("play");
    button.mousePressed(togglePlaying);


    sliderRate = createSlider(0.5, 1.5, 1, 0.01);
    sliderPan = createSlider(-1, 1, 0, 0.01);

}

function togglePlaying() {
    if (!song.isPlaying()) {

        song.play();
        song.setVolume(0.5);
        button.html("pause");

    } else {
        song.pause();
        button.html("play");
    }
}

function loaded() {
    // song.play();
    console.log("loaded");

}

function draw() {
    background((43));
    //Drawing Pan and Rate slider
    // song.html("Rate")
    song.rate(sliderRate.value());
    song.pan(sliderPan.value());

}