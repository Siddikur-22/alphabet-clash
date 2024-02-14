// function play() {
//   // hide the home screen..to hide the screen add the class hidden to the home screen

//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   console.log(homeSection.classList);

//   // show the playground
//   const playgroundSection = document.getElementById("play-ground");
//   console.log(playgroundSection.classList);
//   playgroundSection.classList.remove("hidden");
//   console.log('You have passed correctly',expectedAlphabet);
//   continueGame();
// }

function handleKeyboardKeyUpEvent(event){
  const playerPressed = event.key;
  // key player is expected to press
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // check right or wrong key pressed
  if(playerPressed === expectedAlphabet){
    console.log('You got a point!');

    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore +1;
    setTextElementValueById('current-score',updatedScore);





    // ------------------ignore
    // Update score:
    // // 1. get the current score
    // const currentScoreElement = document.getElementById('current -score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScoreText);

    
    // // 2.increase the score by 1
    const newScore = currentScore + 1;

    // // 3.Show the updated score
    // currentScoreElement.innerText = newScore;

    // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  }
 else{

  console.log('Dur mea....write key daw');
  const currentLife = getTextElementValueById('current-score');
  const updatedLife = currentLife -1;

  setTextElementValueById('current-life',updatedLife);


  // -------------------------------
  // step 1. get the correct life number
  // const currentLifeElement = document.getElementById('current-life');
  // const currentLifeText = currentLifeElement.innerText;
  // const currentLife = parseInt(currentLifeText);
  // // step 2. reduce the life count
  // const newLife = currentLife - 1;

  // // step 3. display the updated life count
  // currentLifeElement.innerText = newLife;
 } 

}
// capture keyboard key press
document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');                                 
    continueGame();
}


