const audioFile = "onekiss.mp3";
var song;
var sliderRate;
var sliderPan;
var button;
var jumpButton;

function setup() {
    createCanvas(200, 200);
    // Adding song
    song = loadSound(audioFile, loaded);
    // Drawing Button
    button = createButton("play");
    button.mousePressed(togglePlaying);

    //Jump at a particular section
    jumpButton = createButton("jump at random");
    jumpButton.mousePressed(jumpSong);
    background(51);
    //Drawing Pan and Rate slider
    sliderRate = createSlider(0.5, 1.5, 1, 0.01);
    sliderPan = createSlider(-1, 1, 0, 0.01);

}

function jumpSong() {
    var len = song.duration();
    var t = random(len)
    song.jump(t);
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
    console.log("Song loaded");

}

function draw() {

    background(song.currentTime() * 10, song.currentTime() * 15, song.currentTime() * 20);
    // song.html("Rate")
    song.rate(sliderRate.value());
    song.pan(sliderPan.value());

}