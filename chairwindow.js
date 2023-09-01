status = "";
function preload () {
    img = loadImage("20230827_185959.jpg")
}
function setup () {
    canvas = createCanvas(640, 420);
    canvas.position(430, 230);
    objectDetected = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded () {
    console.log("Model Loaded!");
    status = "True";
    objectDetected.detect(img, gotResult);
}
function gotResult (error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
    }
}
function draw () {
    image(img, 0, 0, 640, 420);
}