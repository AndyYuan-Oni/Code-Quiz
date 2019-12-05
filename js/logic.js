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
    var highscore = [];

    function countDown() {
        var count = setInterval(timeDispaly, 1000);

        function timeDispaly() {
            remainingSeconds -= 1;
            $("#timer").text(remainingSeconds);
            if (remainingSeconds <= 0) {
                clearInterval(count);
                pgFinish()
            };
        }
    };

    $("#start").on("click", function() {
        displayBox.empty();
        countDown();
        Display(0);
    });


    function pgFinish() {
        displayBox.append("<h4>Type Your Name In</h4>")
        displayBox.append("<input>");
        displayBox.append("<br>");
        displayBox.append("<button class=\"btn btn-primary m-3 submit\">Submit</button>");

        console.log(totalScore);

        $(".submit").on("click", function() {
            var playerInput = $("input").val();

            saveCurrentScore(playerInput);
            window.location = "highscore.html";
        });

    };



    function Display(currentQuestionIndex) {

        if (currentQuestionIndex >= questions.length) {
            totalScore = totalScore + remainingSeconds;
            displayBox.empty();
            remainingSeconds = 1;
        } else {
            displayBox.append("<h4 class = \"Qtitle\">" + questions[currentQuestionIndex].title + "</h4>");
            displayBox.append("<div>Chose correct answer: </div>");

            for (var i = 0; i < 4; i++) {
                displayBox.append("<button class= \"select" + i + "\">" + questions[currentQuestionIndex].choices[i] + "</button>");
            };

            $("button").addClass("btn btn-primary ml-1 selections");
            clickEvent();

        }



    };

    function clickEvent() {
        $(".selections").on("click", function() {
            if ($(this).text() == questions[currentQuestionIndex].answer) {
                displayBox.append("<hr>")
                displayBox.append("<p>Correct!</p>");
                totalScore += 5;
            } else {
                remainingSeconds = remainingSeconds - 10;
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

    function saveCurrentScore(playerInput) {
        // create a score object
        var newInput = [{
            "name": playerInput,
            "score": totalScore
        }];
        var highscore = JSON.parse(localStorage.getItem("highscore"));

        if (highscore == null) {
            highscore = newInput;
            localStorage.setItem("highscore", JSON.stringify(highscore));
        } else {
            highscore.push(newInput);
            localStorage.setItem("highscore", JSON.stringify(highscore));
        }
    }
    /**
     *  On HighScore Page
     */
    getHighScores();
    // getHighScores from LocalStorage
    // Sort

    function getHighScores() {
        var listEl = $("#highscore");
        for (i = 0; i < highscore.length; i++) {
            listEl.append("<li>" + highscore[i].name + "-" + highscore[i].score + "</li>");
        };

    }

    $(".clearAll").on("click", function() {
        $("#highscore").empty();
        highscore = [];
    })
});