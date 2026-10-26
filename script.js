//  
const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Main Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which language is used to style a website?",
        answers: [
            "HTML",
            "Python",
            "CSS",
            "Java"
        ],
        correct: 2
    },
    {
        question: "Which language makes a website interactive?",
        answers: [
            "CSS",
            "JavaScript",
            "HTML",
            "SQL"
        ],
        correct: 1
    },
    {
        question: "Which HTML tag creates a link?",
        answers: [
            "<p>",
            "<h1>",
            "<img>",
            "<a>"
        ],
        correct: 3
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: [
            "//",
            "##",
            "<!-- -->",
            "**"
        ],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;
//
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const questionNumber = document.getElementById("question-number");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-btn");

// 
function showQuestion() {
    const question = questions[currentQuestion];
    // 
    answered = false;

    questionElement.textContent = question.question;
    questionNumber.textContent = "Question " + (currentQuestion + 1) + " of " + questions.length;

    answerButtons.innerHTML = "";

question.answers.forEach(function(answer) {
    const button = document.createElement("button");

    button.textContent = answer;
    button.classList.add("answer-btn");

    button.addEventListener("click", function() {
        if (answered) {
        return;
    }

    answered = true;
    if (answer === question.answers[question.correct]) {
    button.style.backgroundColor = "lightgreen";

    score++;
    scoreElement.textContent = "Score: " + score;
} else {
    button.style.backgroundColor = "lightcoral";
}
});

    answerButtons.appendChild(button);
});
}
nextButton.addEventListener("click", function() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        questionElement.textContent = "Quiz Completed!";
        answerButtons.innerHTML = "";
        nextButton.style.display = "none";
        answerButtons.innerHTML = "Your Final Score: " + score + " / " + questions.length;
    }
});


// username vaangura alert message

let userName = prompt("Welcome to Quiz Master! \nEnter your name:");

if (userName) {
    document.getElementById("welcome-message").textContent =
        "Welcome, " + userName + "! Let's start the quiz.";
} else {
    document.getElementById("welcome-message").textContent =
        "Welcome to Quiz Master! Let's start the quiz.";
}















































showQuestion();