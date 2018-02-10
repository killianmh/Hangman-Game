<<<<<<< HEAD
This code creates a Hangman game. There is an index.html file, a game.js file, and a style.css file. The code also references bootstrap to create the basic layout of the page and add some responsiveness. 
Game functionality waits for the user to push a key. Then it chooses a word (at random) from an array of 7 words and displays _'s for each letter in the word. A hint picture is also displayed to aid in guessing.
The user has 12 guesses to get the whole word correct. The game continues, incrementing wins and losses.

Below is the pseudocode for the game.js file:



hangman pseudocode

css

javascript

create an array of possible words
create wins variable and initialize to 0
create current word variable
-use math.random logic to choose a random word from possible words array
create guesses remaining variable and initialize to 0

create an array of letters already guessed (initialize an empty array)

create an array of correct letter guesses (empty)

create an array full of _'s that has a length equal to length of current word



functions

correctWord (correct letter guesses, current word)
	

game logic

function restart

	update display wins
		
	set current word variable equal to a random choice of possible word array

	update display to correct number of _'s
		
		run display underscores function

	reset guesses remaining to 12

	update display to correct number of guesses remaining

	reset guessed letters array to empty

	update display to show no letters already guessed



function right guess

	update correct guesses array with correct guess
			
	return index(es) of location in word of guessed letter
					
	update display of current word to change from _'s to correctly guessed letters

	update letters already guessed

	update display to show letters already guessed



function wrong guess

	decrement number of guesses remaining
				
	update display to correct number of guesses remaining

	update letters already guessed

	update display to show letters already guessed



function display underscores
	
	count the number of letters in current word
	
	loop over empty wordDisplay string as many times as there are letters

	for each loop, add " _" to the string
	


	
	
		On key release event

			if wins =0 && losses ==0

				run function restart

			if key pressed was a letter && if key pressed has not already been pressed

				if current word.includes(key pressed)
					
					run function right guess
					
					if (correct guesses length === current word && for each return is true)
						
						increment wins

						run function restart
				
				if current word does not include key pressed
					
					run function wrong guess

					if number of remaining guesses = 0

						increment losses
					
						run function restart
	
		
	












=======
This code creates a Hangman game. There is an index.html file, a game.js file, and a style.css file. The code also references bootstrap to create the basic layout of the page and add some responsiveness. 
Game functionality waits for the user to push a key. Then it chooses a word (at random) from an array of 7 words and displays _'s for each letter in the word. A hint picture is also displayed to aid in guessing.
The user has 12 guesses to get the whole word correct. The game continues, incrementing wins and losses.

Below is the pseudocode for the game.js file:



hangman pseudocode

css

javascript

create an array of possible words
create wins variable and initialize to 0
create current word variable
-use math.random logic to choose a random word from possible words array
create guesses remaining variable and initialize to 0

create an array of letters already guessed (initialize an empty array)

create an array of correct letter guesses (empty)

create an array full of _'s that has a length equal to length of current word



functions

correctWord (correct letter guesses, current word)
	

game logic

function restart

	update display wins
		
	set current word variable equal to a random choice of possible word array

	update display to correct number of _'s
		
		run display underscores function

	reset guesses remaining to 12

	update display to correct number of guesses remaining

	reset guessed letters array to empty

	update display to show no letters already guessed



function right guess

	update correct guesses array with correct guess
			
	return index(es) of location in word of guessed letter
					
	update display of current word to change from _'s to correctly guessed letters

	update letters already guessed

	update display to show letters already guessed



function wrong guess

	decrement number of guesses remaining
				
	update display to correct number of guesses remaining

	update letters already guessed

	update display to show letters already guessed



function display underscores
	
	count the number of letters in current word
	
	loop over empty wordDisplay string as many times as there are letters

	for each loop, add " _" to the string
	


	
	
		On key release event

			if wins =0 && losses ==0

				run function restart

			if key pressed was a letter && if key pressed has not already been pressed

				if current word.includes(key pressed)
					
					run function right guess
					
					if (correct guesses length === current word && for each return is true)
						
						increment wins

						run function restart
				
				if current word does not include key pressed
					
					run function wrong guess

					if number of remaining guesses = 0

						increment losses
					
						run function restart
	
		
	












>>>>>>> 49968af9914790a2ea1bf54e54c93e8ad099aef9
