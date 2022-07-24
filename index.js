function start() {
    window.location.href = "../index.html";

    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = "Starting current see";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

function help() {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = "This application aims to help you check your currency. All you have to do is put your dollar note in front of the camera, either front or back and we will do the processing, letting you know the currency value. Click anywhere on the left side of the current screen to start.";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

function welcome() {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = "Welcome to currenSEE. Click left to start and click right for more about this application.";
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

window.onload = function() {
    const welcome = document.getElementById("welcome");
    welcome.play();
}