let button = document.querySelector("#button")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-IN"
    window.speechSynthesis.speak(text_speak)
}

function wishme(){
    let day = new Date();
    let hours = day.getHours()
    if(hours >= 0 && hours < 12){
        speak("Good Morning Madam")
    }
    else if(hours >= 12  && hours <= 16){
        speak("Good Afternoon Madam")
    }
    else{
        speak("Good Evening Madam")
    }

}

window.addEventListener('load' , ()=>{
    wishme()
})

let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event)=>{
    let currentidx = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())

}

button.addEventListener("click" , ()=>{
    recognition.start()
    button.style.display = "none"
    voice.style.display = "block"
})

function takeCommand(message){
    button.style.display = "flex"
    voice.style.display = "none"
    if(message.include("hello") || message.include("hey")){
        speak("hello sir , how can i help you")
    }
    else if(message.include("who are you")){
        speak("i am virtual assistant , created by Sanskriti Gupta  ")
    }
    else if(message.include("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com")
    }
    else if(message.include("open google")){
        speak("opening google...")
        window.open("https://www.google.com")
    }
    else if(message.include("open linkedin")){
        speak("opening linkedin...")
        window.open("https://www.linkedin.com")
    }
    else if(message.include("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
    }
    else if(message.include("open whatshapp")){
        speak("opening whatsapp...")
        window.open("whatsapp://")
    }
    else if(message.include("time")){
        let time =  new Date().toLocaleString(undefined,{hour:"numeric" , minute:"numeric"})
        speak(time)
    }
    else if(message.include("date")){
        let date =  new Date().toLocaleString(undefined,{day:"numeric" , month:"short"})
        speak(date)
    }
    else{
        speak('this is what i found on internet regarding ${message , replace("shifra" ,"")}')
        window.open('https://www.google.com/search?q=${message , replace("shifra" ,"")}')
    }


}