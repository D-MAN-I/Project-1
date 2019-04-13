# Project-1: The Jeopardy Game


## Overview 

For the student's first coding *'project'* experience, I opted to undertake the Jeopardy game.  I created a basic, single-player version of the popular TV gameshow.

When a player comes to the site, my hope is for the gamer to find a fun-filled, intuitive user experience.

**Live site:** <https://d-man-i.github.io/Project-1/>


## Technologies Used

* Languages - HTML5, CSS3, Javascript (along with the JQuery library)
* Designed utilizing methodologies learned during initial weeks of GA's SEI 21 program 
* Project Planning & User Stories - [Trello](https://trello.com/invite/b/0tyWvH8L/a26ae8c77899c5466f494032c7c4198b/ga-sei-21-project-1)
* Text Editor - Visual Studio Code v.1.33.0


## Features

* Gameboard (25 panels, 5 topical catigories with different point value attributes)
* Continuous scoring of points earned or deducted
* Intuitive, easy to use interface
* Occupies your gametime environment an average of 10 - 15 minutes per game

## Wireframe

![Image](wireframe-jeopardy-game.png)


## Game Details

This initial project aims to provide users with a fun, intuitive game experience in the form a digital version of the popular TV gameshow known as *Jeapardy*.  As with its namesake, this rendering poses differing categories of topical *answers* to its players and expects them to submit the correct *questionResponse*. 

When a user or 'player' clicks a given category's *pointsValue* panel, an answer consistent with the selected category appears in a modal.   Also within the modal is an input field for submission of the appropriate *questionResponse(s)*.  This code evaluates whether the correct answer has been submitted; and, if correct, awards the player the selected *pointsValue*.  Submission of an incorrect answer results in a deduction of points. Players have the opportunty to accumulate up to 7,500 points when traversing the digital gameboard's 5 X 5 series of pointsValue panels raning from 100 - 500 points.  

The basic data structure has been organized into a nested categoryObject.  Each of the 5 categories is also an object that contains data arrays specific the user selected game panels *answer*, *questionResponse*, and *pointsValue* matchings. In reflecting upon this interfaces concept gameboard, the concept of arranging the data as (more or less) a series of 'vertical arrays' for each category.  Among other things, doing so allowed the code's author to align (for example) the *pointValue* arrays within each category (or column) to their first element, index[0].        

## Future Development

* Add note instructing the user to click the modal contents' *closeBtn* after each panel response has been submitted 
* Creat additional modals timed to appear when user submits either 1): a correct answer: or, when the a wrong answer
* Add capability for up to 3 players at a time
* Include final jeopardy round. Allow player to bid any amount of an existing points points balance (similar to the wagers seen on the TV gameshow)
* Add two daily doubles (randomly selected panels)
* Allow for timed responses and pointsValue deductions when timed-out (say 20,000ms))
* Update gameboard and background styling to appeal to more users
* Consider other versions geared to the education of elementary school students.
