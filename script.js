(function() {
    var names = ["Ratna", "Shantanu", "Sarim", "Sofia", "Divyajeet"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 's') {
            sayBye.speak(names[i]);
        } else {
            sayHi.speak(names[i]);
        }
    }
})();