function play(){
    // hide the home screen..to hide the screen add the class hidden to the home screen

    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    // console.log(homeSection.classList);

    // show the playground
    const playgroundSection = document.getElementById('play-ground');
    // console.log(playgroundSection.classList);
    playgroundSection.classList.remove('hidden');
    continueGame()

}

function continueGame(){
    // step 1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log('Your Random Alphabet :',alphabet);

    // set random generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
    
    
}




// function play(){
//     hideElementById('home-screen');
//     showElementById('play-ground');
// }