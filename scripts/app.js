console.log("this is a hangman game");
// Pick a random word from an array
const namesArray = [
  "DaleCooper",
  "PeteMartell",
  "AudreyHorne",
  "LauraPalmer",
  "Bob",
  "GordonCole",
  "BigEd",
  "MajorBriggs",
  "NormaJennings",
  "Hawk",
  "SheriffTruman",
  "JosiePackard",
  "DickTremayne",
]

//choose random character from above array
const randomWord = namesArray[Math.floor(Math.random()*namesArray.length-1)];

let wordToArr = [];
wordToArr = randomWord.split('');

console.log(wordToArr);

//every letter needs to be represented by a '_' in the guessfield
for (var i = 0; i < wordToArr.length; i++){
	wordToArr[i] = "_ ";
}

//now print the guessfield to the div
function printWordArr() {
  for(let i = 0; i < wordToArr.length; i++){
    let wordBlanks = document.getElementById("word-blanks");
    let letters = document.createTextNode(wordToArr[i]);

    wordBlanks.appendChild(letters);
  }
}
printWordArr();


// const game {
//   guesses: 10,
//   guessedLetters: [],
//
// }
