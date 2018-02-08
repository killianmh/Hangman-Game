//Initialize global variables:

var possibleWords = ["duck", "goose", "parakeet", "dog", "cat", "shirt", "adder"];

var wins = 0;

var losses = 0;

var currentWord = "";

var guessesRemaining = 0;

var guessedLetters = ["d","e","f"];

var correctLetters = [];

var indexes = [];

var wordDisplay = "";

var guessedLettersDisplay = "";

var correctGuesses = 0;

var numLetters = 0;


function nonRepeatingLetters(word){
	// count the number of unique, non-repeating letters in word
	var length = currentWord.length;
	var count = length;

	for (var i = 0; i < length -1; i++) {
		for (var j = i + 1; j < length; j++) {
			if (word[i] === word[j]) {
				count = count -1;
			}
		}
	}

	return(count);
}



function restart() {
	//update display to correct number of wins
	
	document.getElementById("wins").textContent = wins;
	rand = Math.floor((possibleWords.length) * Math.random());
	currentWord = possibleWords[rand];
	wordDisplay = "";
	displayUnderscores(currentWord);
	guessesRemaining = 12;
	document.getElementById("guessesRemaining").textContent = guessesRemaining;
	guessedLetters.length = 0;
	correctLetters.length = 0;
	guessedLettersDisplay = "";
	document.getElementById("guessedLetters").textContent = guessedLettersDisplay;

	correctGuesses = 0;

	numLetters = nonRepeatingLetters(currentWord);

	return;

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

	indexes.length = 0;

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
		return false;
	}
	else{
		return true;
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


	else if(isLetter(event.key)&&notRepeat(event.key)) {
		console.log("is letter and not repeat guess");

		if (keyInWord(event.key)) {
			console.log("inword");
			rightGuess(event.key);
			correctGuesses ++;
			if (correctGuesses === numLetters) {
				wins ++;
				
				restart();
			}
		}	

		else{
			console.log("incorrect");
			wrongGuess(event.key);
			if (guessesRemaining == 0) {
				losses ++;
				restart();
			}
		}
		
		


	}


	console.log("test");
	

};






