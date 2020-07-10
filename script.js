//need a function to generate quiz questions. Use an array to store the questions, possible answers, and answer key
//variables
var quiz = document.querySelector("#quiz");
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var startBtn = document.getElementById('startBtn');
var timerEl = document.getElementById("timer");
var timerSeconds = 70;
var score = 0;
var questionsEl = document.getElementById("questions");
var index = 0;
var choicesEl = document.getElementById("choices");
var answerResult = document.getElementById("finalScore");
var counter;
//questions array
var myQuestions = [
	{
		question: "What do you use to steer the car?",
		choices: ["steering wheel", "brake pedal", "emergency brake"],
		answer: "steering wheel"
    },
	{
        question: "From left to right, what are the pedals?",
		choices: ["accelerator, brake, clutch", "accelerator, clutch, brake", "clutch, brake, accelerator"],
		answer: "clutch, brake, accelerator"
    },
    {
        question: "From top to bottom, what are the lights on a US traffic light?",
        choices: ["green, yellow, red", "red, yellow, green", "yellow, green, red"],
        answer: "red, yellow, green"
    },
    {
        question: "What does heel and toe shifting involve?",
        choices: ["pressing the clutch and brake with your left foot", "pressing the brake and the accelerator with your right foot at the same time", "pressing the brake with your left foot and the accelerator with your right foot at the same time"],
        answer: "pressing the brake and the accelerator with your right foot at the same time"
    }
];
console.log(myQuestions[0].question);
console.log(myQuestions[0].answers);
console.log(myQuestions[0].correctAnswer);


/* var quizHead = document.createElement("h3");
var quizHeadTxt = document.createTextNode("Question: ");
var quizHeadDiv = quiz.appendChild(quizHead);
quizHead.append(quizHeadTxt);
var quizPara = document.createElement("p");
var quizText = document.createTextNode(myQuestions[0].question);
var quizParaDiv = quiz.appendChild(quizPara);
console.log(quizText);
quizPara.append(quizText);
var answersList = document.createElement("ul");
var answersChoices = document.createElement("li"); */

// begin quiz

startBtn.addEventListener("click", function () {
    document.getElementById("main").classList.add("d-none");
    document.getElementById("quiz").classList.remove("d-none");
    setTime();
    startQuestions();
  });


//timer
function setTime() {
    var counter = setInterval(function () {
      timerSeconds--;
      timerEl.textContent = "Timer: " + timerSeconds;
  
      if (timerSeconds === 0) {
        clearInterval(counter);
      }
    }, 1000);

}

//figure out a function with a for loop to list the possible answers
// making questions
function startQuestions() {
    questionsEl.textContent = myQuestions[index].question;
    choicesEl.innerHTML = "";
 //show choices 
    var choices = myQuestions[index].choices;
  console.log(choices);
    for (var i = 0; i < choices.length; i++) {
      var choiceButton = document.createElement("button");
      choiceButton.textContent = choices[i];
      console.log(choices[i]);
      choicesEl.appendChild(choiceButton)
      choicesEl.setAttribute("class", "p-3 m-1 btn btn-light btn-block");
      
    }
}
//choiceButton.onclick = choiceClick;
  //check choice vs answer
  function checkAnswer() {
    if (this.value !== myQuestions[index].answer) {
      timerSeconds -= 10;
      if (timerSeconds < 0) {
        timerSeconds = 0;
      }
      timerEl.textContent = timerSeconds;
    }}
  
    //show next question
  
    // end of questions?
/*     if (index === Myquestions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
  };

  //score
var finalScoreEl = document.getElementbyId("finalScore");
finalScoreEl.textContent = counter;
  

//show score, enter initials, and set scores into local storage initials=score
// done();
function done() {
    // stop timer
    clearInterval(counter);
} */