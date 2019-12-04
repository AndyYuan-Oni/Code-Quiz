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
    var totalSeconds = 15 * questions.length;
    var remainingSeconds = totalSeconds;
    var displayBox = $("#displayQ");
    var totalScore = 0;
    var chose = false;
    var nextQuestionIndex = currentQuestionIndex - 1;

    function countDown() {
        var count = setInterval(timeDispaly, 1000);

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
        Display(0);
    });


    function pgFinish() {
        displayBox.

        saveCurrentScore();

    };

    function Display(currentQuestionIndex) {

        if (currentQuestionIndex == questions.length) {
            totalScore = totalScore;
            displayBox.empty();

            pgFinish();
        };

        displayBox.append("<h4 class = \"Qtitle\">" + questions[currentQuestionIndex].title + "</h4>");
        displayBox.append("<div>Chose correct answer: </div>");
        for (var i = 0; i < 4; i++) {
            displayBox.append("<button class= \"select" + i + "\">" + questions[currentQuestionIndex].choices[i] + "</button>");
        };

        $("button").addClass("btn btn-primary ml-1 selections");
        clickEvent();


    };

    function clickEvent() {
        $(".selections").on("click", function() {
            if ($(this).text() == questions[currentQuestionIndex].answer) {
                displayBox.append("<hr>")
                displayBox.append("<p>Correct!</p>");
                totalScore = totalScore + 5;
            } else {
                remainingSeconds = remainingSeconds - 5;
                displayBox.append("<hr>")
                displayBox.append("<p>Wrong!</p>");
            }
            chose = true;
            setTimeout(function() {
                displayBox.empty();
                currentQuestionIndex = currentQuestionIndex + 1;
                Display(currentQuestionIndex);
            }, 600);

        });
    };

    function saveCurrentScore() {
        var initial = prompt("What's your name?");
        // create a score object

        currentScore.score = totalScore;
        var currentScore = {
            "name": initial,
            "score": score
        }
        localStorage.setItem(initial, currentScore);
        // append currentScore to LocalStorage
        // goToHighScorePage
        window.location = "highscore.html";
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