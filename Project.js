/*let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i]) = new Option(voice.name, ))
}*/
// Get references to HTML elements
const click_to_convert = document.getElementById('click_to_convert');
const stop_convert = document.getElementById('stop_convert');
const convert_to_text = document.getElementById('convert_to_text');

let recognition;
let isRecording = false;

click_to_convert.addEventListener('click', function(){
    if (isRecording) return; // Prevent multiple starts
    isRecording = true;
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    recognition = new window.SpeechRecognition();
    recognition.interimResults = true;
    recognition.continuous = true; // Keep recording

    recognition.addEventListener('result', e => {
    let interimTranscript = '';
    let finalTranscript = '';

    for (let i = 0; i < e.results.length; ++i) {
        if (e.results[i].isFinal) {
            finalTranscript += e.results[i][0].transcript;
        } else {
            interimTranscript += e.results[i][0].transcript;
        }
    }
    convert_to_text.value = finalTranscript + interimTranscript;
});
    recognition.addEventListener('end', () => {
        if (isRecording) recognition.start(); // Restart if not stopped by user
    });

    recognition.start();
});

stop_convert.addEventListener('click', function(){
    if (recognition && isRecording){
        isRecording = false;
        recognition.stop();
    }
});