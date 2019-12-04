$(document).ready(function() {
    var questions = [{
            title: "1. Commonly used data types DO NOT include:",
            choices: ["strings", "booleans", "alerts", "numbers"],
            answer: "alerts"
        },
        {
            title: "2. The condition in an if / else statement is enclosed within ____.",
            choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
            answer: "parentheses"
        },
        {
            title: "3. Commonly used data types DO NOT include:",
            choices: ["strings", "booleans", "alerts", "numbers"],
            answer: "alerts"
        },
        {
            title: "4. The condition in an if / else statement is enclosed within ____.",
            choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
            answer: "parentheses"
        },
        {
            title: "5. Commonly used data types DO NOT include:",
            choices: ["strings", "booleans", "alerts", "numbers"],
            answer: "alerts"
        }
        ///etc.
    ];

    var currentQuestionIndex = 0;
    var totalSeconds = 50;
    var remainingSeconds = totalSeconds;
    var displayBox = $("#displayQ");
    var totalScore = 0;
    var chose = false;
    var currentQuestion = questions[currentQuestionIndex];
    var currentChoice = currentQuestion.choices;
    var nextQuestionIndex = currentQuestionIndex - 1;

    function countDown() {
        var count = setInterval(timeDispaly(), 1000);

        function timeDispaly() {
            remainingSeconds -= 1;
            $("#timer").text("Time: " + remainingSeconds);
            console.log("1");
            if (remainingSeconds <= 0) {
                clearInterval(count);
            };
        }
    };

    $("#start").on("click", function() {
        displayBox.empty();
        countDown();
        Display();
        clickEvent();
        nextquestion();
    });


    function nextquestion() {
        if (nextQuestionIndex <= (questions.length - 1)) {
            checker();
        } else {
            alert("done");
        }
    }

    function checker() {
        if (chose == false) {
            window.setTimeout(nextQuestionIndex, 100);
        } else {
            currentQuestionIndex = currentQuestionIndex + 1;
            chose == false;
            Display();
            clickEvent();
        }
    }

    function Display() {
        displayBox.append("<h4>" + currentQuestion.title + "</h4>");
        displayBox.append("<div>Chose correct answer: </div>");

        for (var i = 0; i < 4; i++) {
            displayBox.append("<button>" + currentChoice[i] + "</button>");
        };

        $("button").addClass("btn btn-primary ml-1 selections");
    };

    function clickEvent() {
        $(".selections").on("click", function() {
            if ($(this).text() == currentQuestion.answer) {
                displayBox.append("<hr>")
                displayBox.append("<p>Correct!</p>");
                totalScore = totalScore + 5;
            } else {
                totalScore = totalScore - 5;
                displayBox.append("<hr>")
                displayBox.append("<p>Wrong!</p>");
            }
            chose = true;
            setTimeout(function() {
                displayBox.empty();
            }, 600);


        });
    };



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


    // Alert user

    // If there IS a nextQuestionIndex. (nextQuestionIndex = currentQuestionIndex + 1)
    // If nextQuestionIndex == (question.length -1).
    // Get the next question (nextQuestion = questions[nextQuestionIndex])
    //render(nextQuestion)
    // Else, means last question ALREADY finished
    // stopTimer
    // If remainingSeconds
    // Add remainingSeconds to score
    //saveCurrentScore(initial)

    //function render(question) {
    // titleEl = doc.getTitle
    // choiceListEl = doc.getChoices
    // question.getTitle
    // question.getChoices
    // question.getAnswer
    // titleEl.text = questionTitle
    // choiceListEl = questionChoices (involces appending <li> <li> <li> <li>)


    //function renderTimer() {
    // timeEl = doc.getTimeEl
    // timeEl.setText = remainingSeconds


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
    //function getHighScores() {
    // getHighScores from LocalStorage
    // Sort

    //getHighScores()
    //renderList()
    // Display highScores
    // renderList()
    // clearButton.onClick
    // clear LocalStorage
    // alert user
    // If we are staying on the page
    //getHighScores() // return []
    //renderList() // renders empty list
    // Else we are going back to gamePage
    // goBack to GamePage
    // renderList()
    // getListEl
    // for each highScore (from LocalStorage)
    // create <li>
    // li.text = highScore
    // listEl.appendChild(li)
});