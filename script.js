const quizData = [
  {
    question: "Where is the football team from?",
    a: "Unites States",
    b: "Canada",
    c: "New Zealand",
    d: "England",
    correct: "c",
  },
  {
    question: "Where is the football team from?",
    a: "Peru",
    b: "Saudi Arabia",
    c: "Morocco",
    d: "Pakistan",
    correct: "b",
  },
  {
    question: "Where is the football team from?",
    a: "Argentina",
    b: "Italy",
    c: "Chile",
    d: "Spain",
    correct: "d",
  },
  {
    question: "Where is the football team from?",
    a: "Tunisia",
    b: "Egypt",
    c: "Iran",
    d: "Saudi Arabia",
    correct: "b",
  },
  {
    question: "Where is the football team from?",
    a: "England",
    b: "United States",
    c: "Australia",
    d: "Netherlands",
    correct: "b",
  },
  {
    question: "Where is the football team from?",
    a: "India",
    b: "Turkey",
    c: "Morocco",
    d: "Algeria",
    correct: "c",
  },
  {
    question: "Where is the football team from?",
    a: "Brasil",
    b: "Argentina",
    c: "Paraguay",
    d: "Uruguay",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const sumbmitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEls) => {
    if (answerEls.checked) {
      answer = answerEls.id;
    }
  });
  return answer;
}

sumbmitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>Você acertou ${score} / ${quizData.length} respostas corretas!</h2> `;
    }
  }
});
