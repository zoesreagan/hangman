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


//now we need to see if the letter provided by player
//matches a letter in the character name!






// let userInput = function(){
//   let f =
//     document.word;
//   let b =
//     f.elements["letters"];
//
// let character = b.value;
//   //letter provided by player
//
//   character =
//     character.toUpperCase();
//       for(let i = 0; i < wordToArr.length; i++){
//           if(wordToArr[i] === character) {
//             wordToArr[i] = character + " ";
//               let userTurn = true;
//           }
//           b.value = "";
//     }
//
// //deletes the input field and replaces it with the new one
// let blanks = document.getElementById("word-blanks");
// blanks.innerHTML="";
// }
// userInput();

// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list
// if (userTurn === false){
//   let wrongLetters = document.getElementById("wrong-letters");
//   let letters = document.createTextNode(" " + character);
//   wrongLetters.appendChild(letters);
//
// }

//checks if all letters have been found
// let finish = true;
// for (let i = 0; i < wordToArr.length; i++){
//   if(wordToArr[i] === "_ "){
//     finish = false;
//     }
//   }
// }
