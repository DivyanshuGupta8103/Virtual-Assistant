let button = document.querySelector("#button");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

// Speak function
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-IN";
    window.speechSynthesis.speak(text_speak);
}

// Greeting function
function wishme() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Madam");
    } else if (hours >= 12 && hours <= 16) {
        speak("Good Afternoon Madam");
    } else {
        speak("Good Evening Madam");
    }
}

// Run greeting when page loads
window.addEventListener("load", () => {
    wishme();
});

// Speech Recognition setup
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

button.addEventListener("click", () => {
    recognition.start();
    button.style.display = "none";
    voice.style.display = "block";
});

// On speech recognition result
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

// When recognition ends
recognition.onend = () => {
    button.style.display = "flex";
    voice.style.display = "none";
};

// Process commands
function takeCommand(message) {
    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello Madam, how can I help you?");
    } 
    else if (message.includes("who are you")) {
        speak("I am Shifra, your virtual assistant.");
    } 
    else if (message.includes("open youtube")) {
        speak("Opening YouTube");
        window.open("https://www.youtube.com", "_blank");
    } 
    else if (message.includes("open google")) {
        speak("Opening Google");
        window.open("https://www.google.com", "_blank");
    } 
    else if (message.includes("open instagram")) {
        speak("Opening Instagram");
        window.open("https://www.instagram.com", "_blank");
    } 
    else if (message.includes("open facebook")) {
        speak("Opening Facebook");
        window.open("https://www.facebook.com", "_blank");
    } 
    else {
        speak("Sorry Madam, I didn’t understand that. Please try again.");
    }
}
