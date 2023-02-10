// Number of letters for players to play with
const NUMLETTERS = 5
const validchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let pickedchars = [];

// Random letters that words must be made up of
const generateLetters = function() {
    let rngletter = validchars.charAt(Math.floor(Math.random() * 26));
    for (let i=0; i<NUMLETTERS; i++) {
        // Stops having repeated letters
        while (pickedchars.includes(rngletter)) {
            rngletter = validchars.charAt(Math.floor(Math.random() * 26));
        }
        console.log(rngletter)
        pickedchars.push(rngletter);
    }
};

// Generate the wildcard vowel
generateLetters();

// Generate letter squares onto the DOM
const lettersElem = document.querySelector(".letters");
for (let i=0; i<NUMLETTERS; i++) {
    const newLetter = document.createElement("div");
    newLetter.classList.add("letter");
    newLetter.textContent = pickedchars[i];
    lettersElem.appendChild(newLetter);
};

