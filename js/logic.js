//50sec count down timer fucntion

//welcome function
//append questions
//on click reset variables
//show timer countdown
//result fucntion save to local storage
var currentQuestionIndex = 0;
var totalSeconds = 90;
var remainingSeconds = totalSeconds;
// startButton onClick
// Hide startButton

// startCountDown (totalSeconds), inside of the interval function
function countDown() {
    setInterval(function() {
        remainingSeconds--;
    }, 1000);
    if (remainingSeconds = 0) {
        clearInterval(interval);
    };
    saveCurrentScore(initial)
}
// remainingSeconds --
// If time finished
// stopTimer
saveCurrentScore(initial)
    // Else
function renderTimer() {};

function Display() {
    var displayBox = $("#displayQ");
    var currentQuestion = questions[currentQuestionIndex]
    var currentChoice = currentQuestion.choices

    displayBox.empty();
    for (var i = 0; i < questions.length; i++) {
        displayBox.append("<p>" + currentQuestion.title + "</p>");
        displayBox.append("<div>Chose correct answer: </div>");
        for (i = 0; i < 4; i++) {
            displayBox.append("<button>" + currentChoice[i] + "</button>");
        }


        currentQuestionIndex = currentQuestionIndex + 1;
    }

}


// Display the first question. 
// Get the first question. (currentQuestion = questions[currentQuestionIndex])
//render(currentQuestion)
// Set onClick for each choice button
// When any choice is clicked
// Get userChoice from button (which did user choose?)
// Compare userChoice with answer

// If correct
// Increment Score (score++)
// Else
remainingSeconds--

// Alert user

// If there IS a nextQuestionIndex. (nextQuestionIndex = currentQuestionIndex + 1)
// If nextQuestionIndex == (question.length -1).
// Get the next question (nextQuestion = questions[nextQuestionIndex])
render(nextQuestion)
    // Else, means last question ALREADY finished
    // stopTimer
    // If remainingSeconds
    // Add remainingSeconds to score
saveCurrentScore(initial)

function render(question) {
    // titleEl = doc.getTitle
    // choiceListEl = doc.getChoices
    // question.getTitle
    // question.getChoices
    // question.getAnswer
    // titleEl.text = questionTitle
    // choiceListEl = questionChoices (involces appending <li> <li> <li> <li>)
}

function renderTimer() {
    // timeEl = doc.getTimeEl
    // timeEl.setText = remainingSeconds
}

function saveCurrentScore() {
    // var initial = Ask for initials
    // create a score object
    var currentScore = {
            "name": initial,
            "score": score
        }
        // append currentScore to LocalStorage
        // goToHighScorePage
}
/**
 *  On HighScore Page
 */
function getHighScores() {
    // getHighScores from LocalStorage
    // Sort
}
getHighScores()
renderList()
    // Display highScores
    // renderList()
    // clearButton.onClick
    // clear LocalStorage
    // alert user
    // If we are staying on the page
getHighScores() // return []
renderList() // renders empty list
    // Else we are going back to gamePage
    // goBack to GamePage
    // renderList()
    // getListEl
    // for each highScore (from LocalStorage)
    // create <li>
    // li.text = highScore
    // listEl.appendChild(li)