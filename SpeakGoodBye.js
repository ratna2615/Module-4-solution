(function(window) {
    var sayBye = new Object();
    var speakWord = "Bye";
    sayBye.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.sayBye = sayBye;
})(window);
