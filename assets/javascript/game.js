//Initialize global variables:

var possibleWords = ["duck", "goose", "parakeet", "dog", "cat", "shirt", "adder"];

var wins = 0;

var losses = 0;

var currentWord = "";

var guessesRemaining = 0;

var guessedLetters = [];

var correctLetters = [];

var indexes = [];

var wordDisplay = "";

var guessedLettersDisplay = "";











function restart() {
	//update display to correct number of wins
	
	document.getElementById("wins").textContent = wins;
	rand = Math.floor((possibleWords.length) * Math.random());
	currentWord = possibleWords[rand];
	displayUnderscores(currentWord);
	guessesRemaining = 12;
	document.getElementById("guessesRemaining").textContent = guessesRemaining;
	guessedLetters.length = 0;
	guessedLettersDisplay = "";
	document.getElementById("guessedLetters").textContent = guessedLettersDisplay;

	

	return(currentWord);

}

function displayUnderscores(string){
	var length = string.length;
	for (var i = 0; i < length; i++) {
		wordDisplay += "_";
	}
	document.getElementById("currentWord").textContent = wordDisplay;
	return;
}


function rightGuess(letter){
	guessesRemaining--;
	correctLetters.push(letter);
	rightGuessIndex(letter);
	displayCorrectLetter(letter);
	guessedLetters.push(letter);
	guessedLettersDisplay += letter;
	
	document.getElementById("guessedLetters").textContent = guessedLettersDisplay;
	
	document.getElementById("guessesRemaining").textContent = guessesRemaining;

	return;
}


function rightGuessIndex(letter){
	var length = currentWord.length;
	for (var i = 0; i < length; i++) {
		if (letter === currentWord[i]) {
			indexes.push(i);
		}

	}
	return(indexes);
}

function displayCorrectLetter(letter){
	var length = indexes.length;
	var wordDisplayArray = wordDisplay.split("");
	for (var i = 0; i < length; i++) {
		wordDisplayArray[indexes[i]] = letter;
	}
	wordDisplay = wordDisplayArray.join("");

	document.getElementById("currentWord").textContent = wordDisplay;

	return;
}


function wrongGuess(letter){
	guessesRemaining--;
	guessedLetters.push(letter);
	guessedLettersDisplay += letter;

	document.getElementById("guessedLetters").textContent = guessedLettersDisplay;
	
	document.getElementById("guessesRemaining").textContent = guessesRemaining;

}


function isLetter(input){
	var regex = /[a-zA-Z]/;
	if (input.match(regex)) {
		return true;
	}
	else{
		return false;
	}

}


function notRepeat(input){
	if(guessedLetters.indexOf(input) !== -1){
		return true;
	}
	else{
		return false;
	}
}

function keyInWord(input){
	if(currentWord.indexOf(input) !== -1){
		return true;
	}
	else{
		return false;
	}
}



document.onkeyup = function(event){
	if (guessesRemaining == 0) {
		restart();
	}

	else if(isLetter(event.key)&&notRepeat(event.key)||isLetter(event.key)&&guessesRemaining == 12) {
		if (keyInWord(event.key)) {
			rightGuess(event.key);
			console.log("correct");
		}
		else{
			wrongGuess(event.key);
			console.log("wrong");
		}


	}


	console.log("test");
	// rightGuess("o");

};






