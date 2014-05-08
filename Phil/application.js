/**
 * Created by Phil on 5/7/2014.
 */
var questions = [
    {
        question: "Who is Prime Minister of the United Kingdom?",
        choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
        correctAnswer:0
    },
    {
        question: "What leaf is on the Canadian flag?",
        choices: ["Oak", "Spruce", "Birch", "Maple"],
        correctAnswer:3
    },
    {
        question: "What is Phil's favourite animal?",
        choices: ["Pig","Monkey","Tree frog","Tiger","Lion"],
        correctAnswer:2
    },
    {
        question: "Who is Phil's favourite scientist?",
        choices: ["Albert Einstein","Richard Feynman","Bertrand Russell"],
        correctAnswer:1
    }];

var currentQuestion = 0;
var answers = [];

function addQuestion(questionNum){
    // Get the current question object
    var curQuestionObj = questions[questionNum];
    var questionID = "question" + questionNum;
    // Set up the question div
    $(".questions").append('<div id="' + questionID + '"></div>');
    // Add the question and divs
    $("#" + questionID).append(
            '<h2>Question <span id="question-number">' + (questionNum + 1) + '</span></h2>' +
            '<div class="question">' +
                '<p>' + curQuestionObj.question + '</p>' +
            '</div>' +
            '<div class="choices"></div>');

    // Create a button for each choice
    for(var i=0; i<curQuestionObj.choices.length; i++){
        var newBtn = $('<input type="radio" name="answer' + questionNum +
            '" value="' + i + '"/>'+ curQuestionObj.choices[i] +'<br>');
        $("#" + questionID).find('.choices').append(newBtn);
    }
}

function showResults(){
    // Add a div
    $(document.body).append("<div class='results'></div>");
    // Add a title
    $('.results').append("<h2>Results</h2><ul></ul>");
    for(var i=0; i<questions.length; i++){
        var correctAnswer = questions[i].correctAnswer;
        var message = (parseInt(answers[i]) == correctAnswer)
            ? "Correct" : "Incorrect";
        if(message == "Incorrect") {
            $('.results').find('ul').append(
                    '<li>Question ' + (i + 1) + ': ' + message +
                    '<br>The correct answer is: '
                     + questions[i].choices[correctAnswer] + '</li>')
        }else{
            $('.results').find('ul').append(
                    '<li>Question ' + (i + 1) + ': ' + message + '</li>')
        }
    }
}

function nextQuestion(){
    // Save the selected value
    var selectedVal = "";
    var selected = $("input[type='radio'][name='answer"
        + currentQuestion + "']:checked");
    if(selected.length > 0){
        selectedVal = selected.val();
    }
    answers.push(selectedVal);

    // Hide the current question
    var questionID = "question" + currentQuestion;
    $("#" + questionID).hide();

    if(currentQuestion < questions.length-1) {
        // Add the next question
        currentQuestion += 1;
        addQuestion(currentQuestion);
    }else{
        $(".navigation").find("button").hide();
        // Finished the quiz so we can show the results
        showResults();
    }
}

$(document).ready(function(){
    // Add the first question
    addQuestion(currentQuestion);
    // Add handler for next question button
    $(".navigation").on("click","button", nextQuestion);
});