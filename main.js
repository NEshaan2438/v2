var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start() {
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    var confidence = event.results[0][0].confidence;
    console.log(Number(confidence) * 100 + "% sure");
    if (content.includes("take my selfie")) {
        speak();
    }
}

function speak(){

    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your first Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function() {
        img_id = "selfie1";
        speak_data = "Taking your first selfie now second selfie in 5 seconds";
        take_snapshot();
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000)
    setTimeout(function() {
        img_id = "selfie2";
        speak_data = "Taking your second selfie now third selfie in 5 seconds";
        take_snapshot();
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000)
    setTimeout(function() {
        img_id = "selfie3";
        speak_data = "Taking your third selfie now";
        take_snapshot();
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 15000)
}

function take_snapshot() {
    Webcam.snap(function(data_uri) {
    if (img_id == "selfie1") {
        document.getElementById("result1").innerHTML = "<img id='selfie1' src='" + data_uri + "'/>";
    } else if (img_id == "selfie2") {
        document.getElementById("result2").innerHTML = "<img id='selfie2' src='" + data_uri + "'/>";
    } else if (img_id == "selfie3") {
        document.getElementById("result3").innerHTML = "<img id='selfie3' src='" + data_uri + "'/>";
    } 
});
}