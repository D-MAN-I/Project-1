//To play Jeopardy game  answers need to be paired with question responses.
//Points (or money) accumulate based on correct question-responses (i.e., answers in the form of a question).

/*Category locations on gameboard are fixed. Knowing the category location (i.e., Cat1 - Cat5) and point value (100 - 500)
 will indicate location on the board (i.e, row and column).  For example row 2 column 2 is same as Cat2, 200 pts.*/

//When user or player clicks (for example) the panel for Cat1-100pts, the gameboard should disappear and an answer related to the category should appear.

//step 1
//let panelDetect = document.getElementsByClassName("points")

//step 2 - event listener, add click button to each square on the board

let panelDetect = document.querySelectorAll(".points")
console.log(panelDetect)

var totalScore = 0
var numTurns = 0
        
        $( ".points" ).click(function(event) {
            $('#resp').val('')
// Provides the 'unique identifier' associated with each panel on the gameboard
            let panelClick = event.target.id
// Get the category number (i.e., cat1, cat2, cat3...)            
            let target = $(event.target);
            if ( target.is( ".points" ) ) {
            let pClassCat = target.parent().attr('class');
// Find - convert - calculate index number for data arrays            
            let row = panelClick.charAt(1) - 1
            let col = panelClick.charAt(3) - 1
//Set variable for qRs array elements so they can be compared to user submitted responses             
            let quesResp = categoryObj[pClassCat].questionResponses[row]
            $('.simpleModal .ans').html(categoryObj[pClassCat].answers[row]);
            $('.simpleModal .qR').html('What is...(submit your response) ?');
            modal.style.display = "block";
            $('#modalBtn').click(function() {
                let inputText = $('#resp').val()
                console.log("input text: " + inputText)
                if (inputText === quesResp) {

                    totalScore = Number(categoryObj[pClassCat].pointValues[row]) + totalScore

                } else {

                    totalScore = totalScore - Number(categoryObj[pClassCat].pointValues[row])
                }
                //disable panel click and removes points shown in panel
                $('#scoreboard').html('Your score is: ' + totalScore + " points")
                $(event.target).removeClass('points')
                $(event.target).html('')
                numTurns++
                if(numTurns===4 && totalScore > 0) {
                    alert('You Win')
                } else if (numTurns === 4 && totalScore <= 0) {
                    alert('Sorry, try again (refresh page)')
                } 
                //removed click handler for scoring accuracy
                $('#modalBtn').off()
                console.log(totalScore)
                console.log(inputText)
            })
            
            console.log(pClassCat)
            console.log(panelClick)
            console.log(categoryObj[pClassCat])
            console.log(row)
            console.log(col)
            }
            
          })
    
// Get modal element
let modal = document.querySelector('.simpleModal')

// Get open modal button
// let modalBtn = document.querySelector('.modalBtn')

// Get close button
let closeBtn = document.getElementsByClassName('closeBtn')[0]

let div = document.querySelectorAll('.points')[0]

// //Listen for open click
// div.addEventListener("click", function() {
//     modal.style.display = "block";
//    $('.simpleModal p').html('hello');
// })

// Listen for closed click
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
})

// $('.points').on('click', function(){
//     console.log($('.points').parent().attr('class'))
// })

$(document).ready(function () {
    // $('.simpleModal p').click(function() {
    // div.addEventListener("click", function () {
        // modal.style.display = "block";
        
    // })


    // $('cat1').click(function () {})
    // for (i = 0; i < categoryObj.cat1.length; i++) {
            
    //         console.log(categoryObj.cat1)

    });
    

//The 'data structure' includes multiple arrays containing [answers], [questionResponses], and [pointValues] (~ vertical arrays)


const categoryObj = {
    cat1: {
        answers: ['The Peach State', 'The Big Apple', 'The Orange State', 'Homeland of the Kiwi', 'This U.S. state has adopted the strawberry'],
        questionResponses: ['Georgia', 'New York City', 'Florida', 'New Zealand', 'Louisiana'],
        pointValues: [100, 200, 300, 400, 500]
    },

    cat2: {
        answers: ['The 2 main styles of this liquor are Dutch & London Dry', 'This brand has been made at a Lynchburg, TN distillery since 1866', 'The potent potable in a mint julep', 'A 7&7 mixes 7up and this', 'The letters V.O.P. labled on a cognac bottle stand for this'],
        questionResponses: ['gin', 'Jack Daniels', 'bourbon', 'Seagram\'s 7', 'very old pale'],
        pointValues: [100, 200, 300, 400, 500]
    },

    cat3: {
        answers: ['Number of quarts in a gallon', 'Number of dozens in a gross', 'Number of pounds in a ton (T)', 'Number of days in a leap year', 'A square foot has this many square inches'],
        questionResponses: ['4', '12', '2000', '366', '144'],
        pointValues: [100, 200, 300, 400, 500]
    },

    cat4: {
        answers: ['This capital city is in Florida', 'When Georgia is on your mind, this is its most populus city', 'The home of country music', 'Capital of the Golden State', 'Most north-western U.S. state'],
        questionResponses: ['Tallahasse', 'Atlanta', 'Nashville', 'Sacramento', 'Juneau'],
        pointValues: [100, 200, 300, 400, 500]
    },

    cat5: {
        answers: ['This tells Git to start monitoring your current folder', 'Lets you determine whether files have been staged', 'Places a file on the stage', 'After staging a file you must do this', 'Creates a new local Git repo copied from a remote one'],
        questionResponses: ['init', 'status', 'add', 'commit', 'clone'],
        pointValues: [100, 200, 300, 400, 500]
    }
}

 //Then, user will need to 'input' a question-response.

 //A 'function' will need to evaluate the player's question-responses for correctness.

 //If the answer is correct pts are awarded.  If incorrect pts are deducted.  (Negative point balances are allowed.)  Accumulated pts must be tracked throughout the course of the game.

//After each instance (either correct or incorrect question-response evaluation) the curremt Cat-Pt panel will disappear from the gameboard (so that it cannot be re-selected), 

 //This process of selecting panels by Cat-Pts continues until no panels remain on the board.  At this point (after answering 25 questions), the users total accumulated pts are evaluated as a final score.
 //If total pts are > 0, player wins. 

 // If negative total pts balance after playing all panels, player loses (sorry, try again).  