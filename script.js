// Number of letters for players to play with
const NUMLETTERS = 8 
const lettersElem = document.querySelector(".letters");

for (let i=0; i<NUMLETTERS; i++) {
    const newLetter = document.createElement("div");
    newLetter.classList.add("letter");
    newLetter.style.flex = 1;
    newLetter.textContent = 'X';
    lettersElem.appendChild(newLetter);
}