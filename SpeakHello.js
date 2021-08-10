(function(window) {
    var sayHi = new Object();
    var speakWord = "Hello";
    sayHi.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.sayHi = sayHi;
})(window);
