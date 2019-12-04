function Display() {
    var currentQuestion = questions[currentQuestionIndex]
    var currentChoice = currentQuestion.choices



    displayBox.append("<h4>" + currentQuestion.title + "</h4>");
    displayBox.append("<div>Chose correct answer: </div>");

    for (i = 0; i < 4; i++) {
        displayBox.append("<button>" + currentChoice[i] + "</button>");
    };

    $("button").addClass("btn btn-primary ml-1 selections");
    //onclick selection buttons
    $(".selections").on("click", function() {


        if (chose == false) {
            if ($(this).text() == currentQuestion.answer) {
                displayBox.append("<hr>")
                displayBox.append("<p>Correct!</p>");
                totalScore = totalScore + 5;
            } else {
                remainingSeconds = remainingSeconds - 5;
                displayBox.append("<hr>")
                displayBox.append("<p>Wrong!</p>");

            }
        }

        setTimeout(function() {
            displayBox.empty();
        }, 600);
        chose = true;
        currentQuestionIndex = currentQuestionIndex + 1;
    });
};