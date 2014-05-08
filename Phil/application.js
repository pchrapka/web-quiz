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
        var newBtn = $('<input type="radio" name="answer" value="' + i + '"/>'+ curQuestionObj.choices[i] +'<br>');
        $("#" + questionID).find('.choices').append(newBtn);
    }
}

function nextQuestion(){
    currentQuestion += 1;
    addQuestion(currentQuestion);
}

$(document).ready(function(){
    // Add a question
    addQuestion(currentQuestion);
    $(".navigation").on("click","button", nextQuestion());

});