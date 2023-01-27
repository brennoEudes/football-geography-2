const quizData = [
  {
    question: "Where is the football team from?",
    a: "Unites States",
    b: "Canada",
    c: "New Zealand",
    d: "England",
    correct: "c",
    img: "https://upload.wikimedia.org/wikipedia/pt/e/e9/AucklandCityFC.png"
  },
  {
    question: "Where is the football team from?",
    a: "Peru",
    b: "Saudi Arabia",
    c: "Morocco",
    d: "Pakistan",
    correct: "b",
    img: "https://w7.pngwing.com/pngs/148/452/png-transparent-al-hilal-fc-saudi-crown-prince-cup-football-esteghlal-f-c-al-duhail-sc-al-hilal-fc-emblem-trademark-logo.png"
  },
  {
    question: "Where is the football team from?",
    a: "Argentina",
    b: "Italy",
    c: "Chile",
    d: "Spain",
    correct: "d",
    img: "https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png"
  },
  {
    question: "Where is the football team from?",
    a: "Tunisia",
    b: "Egypt",
    c: "Iran",
    d: "Saudi Arabia",
    correct: "b",
    img: "https://seeklogo.com/images/A/Al_Ahly_Club-logo-BA70BE3AE8-seeklogo.com.png"
  },
  {
    question: "Where is the football team from?",
    a: "England",
    b: "United States",
    c: "Australia",
    d: "Netherlands",
    correct: "b",
    img: "https://logodownload.org/wp-content/uploads/2021/01/seattle-sounders-fc-logo-1.png"
  },
  {
    question: "Where is the football team from?",
    a: "India",
    b: "Turkey",
    c: "Morocco",
    d: "Algeria",
    correct: "c",
    img: "https://img2.gratispng.com/20180607/ysq/kisspng-wydad-ac-raja-casablanca-caf-champions-league-caf-5b197e6d7fdf08.8672573015283974215238.jpg"
  },
  {
    question: "Where is the football team from?",
    a: "Brasil",
    b: "Argentina",
    c: "Paraguay",
    d: "Uruguay",
    correct: "a",
    img: "https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-escudo-novo.png"
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
const imagem = document.getElementById("image-shield");

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
  imagem.setAttribute("src", currentQuizData.img);
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
