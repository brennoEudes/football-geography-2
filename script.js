const quizData = [
    {
        question: "Where is the football team from?"
        a: "Brasil",
        b: "Argentina",
        c: "Chile",
        d: "Uruguai",
        correct: "d",
    },
    {
        question: "Where is the football team from?"
        a: "Peru",
        b: "Argentina",
        c: "Chile",
        d: "Uruguai",
        correct: "d",
    },
    {
        question: "Where is the football team from?"
        a: "Bolívia",
        b: "Argentina",
        c: "Chile",
        d: "Uruguai",
        correct: "d",
    },
    {
        question: "Where is the football team from?"
        a: "Equador",
        b: "Argentina",
        c: "Chile",
        d: "Uruguai",
        correct: "d",
    },
    {
        question: "Where is the football team from?"
        a: "Paraguai",
        b: "Argentina",
        c: "Chile",
        d: "Uruguai",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const sumbmitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz () {
    
    deselectAnswers ()
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function deselectAnswers () {
    answerEls.forEach(answerEls => answerEls.checked = false);
}

function getSelected () {
    let answerEls
    answerEls.forEach(answerEls => {
        if (answerEls.checked) {
            answer = answerEls.id;
        }
    })
    return answer;
}

sumbmitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
           <h2>quiz.innerHTML = `Você acertou ${score} / ${quizData.length} respostas corretas!`</h2> 
        }
    }
})