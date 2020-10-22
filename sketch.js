const audioFile = "./onekiss.mp3";
var song;
var sliderRate;
var sliderPan;
var button;
var jumpButton;
// var nextButton;










/*
adding code

*/

let width = screen.width,
    height = screen.height;
let stars = [],
    speed = 1,
    angle = 0,
    angle_speed = 0;
let stars_number = (width > height) ? width * 2 : height * 2;

function Star() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.color = [random(255), random(255), random(255)];

    this.remake = function() {
        this.z -= speed;
        if (this.z < 1 || this.z > width) {
            this.x = random(-width, width);
            this.y = random(-height, height);
            this.z = random(width);
            this.color = [random(255), random(255), random(255)];
        };
    }

    this.render = function() {
        noStroke();
        fill(this.color);
        let sx = map(this.x / this.z, 0, 1, 0, width);
        let sy = map(this.y / this.z, 0, 1, 0, height);

        let r = map(this.z, 0, width, 13, 0);
        ellipse(sx, sy, r, r);
    }
}

function setup() {
    createCanvas(width, height);
    ///////////////////////////////////////////////////////
    //enter
    song = loadSound(audioFile, loaded);
    //exit
    // Drawing Button
    button = createButton("play");
    button.mousePressed(togglePlaying);
    button.size(200, 100);
    button.position(width / 2, height / 2);
    button.style("font-family", "Bodoni");
    button.style("font-size", "48px");
    //Jump at a particular section
    jumpButton = createButton("jump");
    jumpButton.mousePressed(jumpSong);
    jumpButton.size(200, 100);
    jumpButton.position(width / 2 + 400, height / 2);
    jumpButton.style("font-family", "Bodoni");
    jumpButton.style("font-size", "48px");
    // background(51);
    //Drawing Pan and Rate slider
    sliderRate = createSlider(0.5, 1.5, 1, 0.01);
    sliderRate.size(200, 100);
    sliderRate.position(width / 2, height / 2 - 300);
    sliderRate.style("font-family", "Bodoni");
    sliderRate.style("font-size", "48px");

    sliderPan = createSlider(-1, 1, 0, 0.01);
    sliderPan.size(200, 100);
    sliderPan.position(width / 2 + 400, height / 2 - 300);
    sliderPan.style("font-family", "Bodoni");
    sliderPan.style("font-size", "48px");


    // Next
    // nextButton = createButton("Next");
    // nextButton.mousePressed(nextSong);
    ///////////////////////////////////////////////////////

    for (let i = 0; i < stars_number; i++) {
        stars[i] = new Star();
    }
}
///////////////////////////////////////////////////////////////

// function nextSong() {
//     var len = song.duration();
//     song.jump(len)
// }

function jumpSong() {
    var len = song.duration();
    var t = random(len);
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
///////////////////////////////////////////////////////////////
function draw() {
    angle += angle_speed;
    background(0);
    translate(width / 2, height / 2);
    rotate(angle);
    /////////////////////////////////

    // song.html("Rate")
    song.rate(sliderRate.value());
    song.pan(sliderPan.value());
    /////////////////////////////////



    for (let i = 0; i < stars_number; i++) {
        stars[i].remake();
        stars[i].render();
    }
}

function keyPressed() {
    switch (keyCode) {
        case UP_ARROW:
            speed++;
            break;
        case DOWN_ARROW:
            speed--;
            break;
        case LEFT_ARROW:
            angle_speed -= PI / 360;
            break;
        case RIGHT_ARROW:
            angle_speed += PI / 360;
            break;
        case ENTER:
            speed = 2;
            angle_speed = 0;
            break;
        default:
            return false;
    }
}

function mousePressed() {
    angle_speed = map(mouseY, 0, height, -PI / 60, PI / 60);
    speed = map(mouseX, 0, width, -20, 20);
}