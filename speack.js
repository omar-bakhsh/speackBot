var recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-usa';
recognition.interimResults = true;
recognition.maxAlternatives = 1;
recognition.start();
var words = document.querySelector(".words");
var boot = document.querySelector(".boot");
recognition.onresult = function(event) {
    console.log('You said: ', event.results[0][0].transcript);
    // console.log(recognition);
    let VoiseText = event.results[0][0].transcript;
    words.value = VoiseText;


    change()

}

recognition.addEventListener('end', recognition.start)

// function add replay msg to boot form
function change() {

    // obj commands to boot .
    const objMsg = {
        gradut: words.value.includes("hello"),

        state: words.value.includes("how are you"),

        name: words.value.includes("what is your name"),
        myName: words.value.includes("what is my name"),

        count: words.value.includes("oneplus one"),
        count: words.value.includes("1 + 1"),


        delCommand: words.value.includes("delete all"),

        bgColor: words.value.includes("background colour"),

    }




    // command replay hello. 
    if (objMsg.gradut) {
        boot.value = " welcome omar 👋";
    }

    // command replay name. 
    if (objMsg.name) { boot.value = " Bot  💻 "; }

    // command replay myName. 
    if (objMsg.myName) { boot.value = "developer Omar Bakhsh ‼ "; }

    // command replay count. 
    if (objMsg.count) { boot.value = " it's 2 "; }

    // command replay how are you . 
    if (objMsg.state) { boot.value = " Fine thanks \n and you ⁉"; }

    // command Delete form. 
    if (objMsg.delCommand) {
        console.log("deleted all");
        words.value = "";
        boot.value = "";
        boot.placeholder = " deleted ..";
        console.clear();
    }
    if (words.value.length > 5) {
        words.value += '\n';
    }

    function red() {

        document.body.style.background = 'red';

    }
    // command replay how are you . 
    if (objMsg.bgColor) {
        boot.value = " background changed ";
        red()
    }


    var speackBtn = document.querySelector("#speack-btn");

    speackBtn.addEventListener('mouseenter', () => {

        if (speechSynthesis == undefined) {
            return false;

        } else {
            console.log("vois is supported ");

        }

        // get msg from bot form .
        var word_to_speak = boot.value;
        // get speech msg obj + sign word_to_speak.
        var msg = new SpeechSynthesisUtterance(word_to_speak);
        // get voices obj .
        var voices = speechSynthesis.getVoices();
        // chose speaker number from list of 20.
        msg.voice = voices[0];

        msg.voiceURI = 'native'
        msg.lang = 'en-US';
        msg.pitch = 2; //0 to 2
        msg.volume = 1; // 0 to 1
        msg.rate = 1.5; // 0.1 to 10
        // console.table(voices)

        /*  setTimeout(function() {
                 window.speechSynthesis.pause();
             }, 3000);*/

        window.speechSynthesis.speak(msg);


        // recognition.onspeechend = function() {
        //     console.log('Speech has stopped being detected');
        // }
    })

};