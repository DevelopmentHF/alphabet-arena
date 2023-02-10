// Number of letters for players to play with
const NUMLETTERS = 8 
const validchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let pickedchars = [];

// Random letters that words must be made up of
const generateLetters = function() {
    for (let i=0; i<NUMLETTERS; i++) {
        let rngletter = validchars.charAt(Math.floor(Math.random() * 26));
        console.log(rngletter)
        pickedchars.push(rngletter);
    }
};

// Pick a wildcard letter that is able to be used
const generateWildcard = function() {
    const vowels = "AEIOU";
    let rngvowel = vowels.charAt(Math.floor(Math.random() * 5));
    while (pickedchars.includes(rngvowel)) {
        rngvowel = vowels.charAt(Math.floor(Math.random() * 5));
    }
    return rngvowel;
};

generateLetters();
let wildcard = generateWildcard();

const lettersElem = document.querySelector(".letters");
for (let i=0; i<NUMLETTERS; i++) {
    const newLetter = document.createElement("div");
    newLetter.classList.add("letter");
    newLetter.textContent = pickedchars[i];
    lettersElem.appendChild(newLetter);
};