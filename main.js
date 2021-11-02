function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    lassifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/q1RzklAw-/model.json',modelLoaded);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotReasult);    
}

function gotReasult(error, results ) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = result[0].label;
        document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}