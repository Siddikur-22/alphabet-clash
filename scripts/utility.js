function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
    console.log(element, elementId);
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

// add background color
function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


function getRandomAlphabet() {
  // get or create an alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  console.log(alphabets);

  // get a random index generate between 0 -25
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
//   console.log(index, alphabet);
  return alphabet;

}

function continueGame() {
    // step 1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log("Your Random Alphabet :", alphabet);
  
    // set random generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById("current-alphabet");
    currentAlphabetElement.innerText = alphabet;
  
    // set background color
    setBackgroundColorById(alphabet);
  }