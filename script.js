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
}

// 

generateLetters();

const lettersElem = document.querySelector(".letters");
for (let i=0; i<NUMLETTERS; i++) {
    const newLetter = document.createElement("div");
    newLetter.classList.add("letter");
    newLetter.textContent = pickedchars[i];
    lettersElem.appendChild(newLetter);
}