// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
  {
    question:
      "The general law of mechanics that stress is directly proportional to strain?",
    imgSrc: "logo-2.jpeg",
    choiceA: "Hooke’s law",
    choiceB: "Boyle’s law",
    choiceC: "Shearing stress",
    correct: "A",
  },
  {
    question: "What is the unit of work?",
    imgSrc: "logo-2.jpeg",
    choiceA: "Newton meter per second",
    choiceB: "One Newton meter or one Joule",
    choiceC: "Newton meter squared",
    correct: "B",
  },

  {
    question: "Which mouse click is used to select item?  ",
    imgSrc: "logo-2.jpeg",
    choiceA: "Double click",
    choiceB: "Single click",
    choiceC: "Drag and drop",
    correct: "B",
  },
  {
    question: "Which key allows to cancel an operation?",
    imgSrc: "logo-2.jpeg",
    choiceA: "Shift key",
    choiceB: "Escape key",
    choiceC: "Enter key",
    correct: "B",
  },
  {
    question: "This key is used with other keys for different purposes.",
    imgSrc: "logo-2.jpeg",
    choiceA: "Shift key",
    choiceB: "Backspace key",
    choiceC: "Enter key",
    correct: "A",
  },
  {
    question:
      "Why a man sitting in a moving bus suddenly moves forward when the bus suddenly stops?",
    imgSrc: "logo-2.jpeg",
    choiceA: "Due to brakes",
    choiceB: "Due to force exerted by the machine",
    choiceC: "Due to inertia",
    correct: "C",
  },
  {
    question: "Why are transition elements called so?",
    imgSrc: "logo-2.jpeg",
    choiceA: "Variable valency",
    choiceB: "Having different colors",
    choiceC: "Both A and B",
    correct: "C",
  },
  {
    question:
      "Which property of metals is used for making bells and strings of musical instruments like Sitar and Violin?",
    imgSrc: "logo-2.jpeg",
    choiceA: " Sonorousness",
    choiceB: "Malleability",
    choiceC: "Ductility",
    correct: "A",
  },
  {
    question: "Which of the following pairs will give dis-placement reactions?",
    imgSrc: "logo-2.jpeg",
    choiceA: " FeSO4 solution and Copper metal",
    choiceB: "AgNO3 solution and Copper metal",
    choiceC: " CuSO4 solution and Silver metal",
    correct: "B",
  },
  {
    question:
      "The highly reactive metals like Sodium, Potas-sium, Magnesium, etc. are extracted by the",
    imgSrc: "logo-2.jpeg",
    choiceA: " electrolysis of their molten chloride",
    choiceB: "electrolysis of their molten oxides",
    choiceC: "reduction by aluminium",
    correct: "A",
  },
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 30; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

// counter render

function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count++;
  } else {
    count = 0;
    // change progress color to red
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

// checkAnwer

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsCorrect();
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
  scoreDiv.style.display = "inline";

  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / questions.length);

  // choose the image based on the scorePerCent
  let img =
    scorePerCent >= 80
      ? "imgq/q1.jpeg"
      : scorePerCent >= 60
      ? "imgq/q2.jpeg"
      : scorePerCent >= 40
      ? "imgq/q3.jpeg"
      : scorePerCent >= 20
      ? "imgq/q4.jpeg"
      : "imgq/q5.jpeg";

  scoreDiv.innerHTML = "<img src=" + img + ">";
  // scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}
