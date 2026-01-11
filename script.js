const quiz = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        answer: 2
    },
    {
        question: "Which is used for web scripting?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option");

loadQuestion();

function loadQuestion() {
    questionEl.innerText = quiz[currentQuestion].question;

    optionBtns.forEach((btn, index) => {
        btn.innerText = quiz[currentQuestion].options[index];
        btn.disabled = false;
        btn.style.background = "#4e4ecf";
    });
}

function checkAnswer(selected) {
    optionBtns.forEach(btn => btn.disabled = true);

    if (selected === quiz[currentQuestion].answer) {
        score++;
        optionBtns[selected].style.background = "green";
    } else {
        optionBtns[selected].style.background = "red";
        optionBtns[quiz[currentQuestion].answer].style.background = "green";
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML =
            `<h2>Quiz Completed!</h2>
             <p>Your Score: ${score}/${quiz.length}</p>`;
    }
}
