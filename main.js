console.log("Hello World")
//To play Jeopardy game  answers need to be paired with question responses.
//Points (or money) accumulate based on correct question-responses (i.e., answers in the form of a question).

/*Category locations on gameboard are fixed. Knowing the category location (i.e., Cat1 - Cat5) and point value (100 - 500)
 will indicate location on the board (i.e, row and column).  For example row 2 column 2 is same as Cat2, 200 pts.*/

 //The 'data structure' would include multiple arrays containing [answers], [questionResponses], and [pointValues] (amongst others TBD)

 //When user or player clicks (for example) the panal for Cat1-100pts, the gameboard should disappear and an answer related to the category should appear.

 //Then, user will need to 'input' a question-response.

 //A 'function' will need to evaluate the player's question-responses for correctness.

 //If the answer is correct pts are awarded.  If incorrect pts are deducted.  (Negative point balances are allowed.)  Accumulated pts must be tracked throughout the course of the game.

//After each instance (either correct or incorrect question-response evaluation) the curremt Cat-Pt panel will disappear from the gameboard (so that it cannot be re-selected), 

 //This process of selecting panels by Cat-Pts continues until no panels remain on the board.  At this point, the users total accumulated pts are evaluated for Final Jeopardy entry.
 //If total pts are > 0, go to final jeopardy automatically. If <= to zero, player loses (unable to proceed to final jeopardy).
 
 //Final jeopardy (FJ) category will be fixed (players won't be able to choose it). Players may bet amounts up to the value of their accumulated total pts balance.
 //The user will be prompted for his/her bet amount.  An FJ answer will be provided consistent with the category, the user will be prompted to input a question-response.
 //This response will be evaluated. If correct, the bet amt will be awarded by adding it to the total score.  If incorrect, the bet amt will be deducted from the total score.  
 //If at this point in FJ, the player still has positive pts he/she will win.  If negative total pts balance after FJ question-response evaluation, player loses.   