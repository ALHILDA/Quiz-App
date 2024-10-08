
const questions = [
    {
        question: "In Japanese history, what was a Rōnin??",
        answers: [
            { text: "A banished Samurai", correct: false },
            { text: "A young Samurai", correct: false },
            { text: "A Samurai with no lord or master", correct: true },  
        ]
    },
    {
        question: "What is the capital of Ghana?",
        answers: [
            { text: "Accra", correct: true},
            { text: "Abuja", correct: false },
            { text: "Kigali", correct: false },
        ]
    },
    {
        question: "How many bones are there in the adult human body?",
        answers: [
            { text: "203", correct: false },
            { text: "124", correct: false },
            { text: "206", correct: true },
        ]
    },
    {
        question: "Which breed of dog is known for its excellent sense of smell and tracking abilities?",
        answers: [
            { text: "German Shepherd", correct: false },
            { text: "Bloodhound", correct: true },
            { text: "Paris", correct: false }, 
        ]
    },
    {
        question: "Which human bone is the longest and strongest?",
        answers: [
            { text: "Tibia", correct: false },
            { text: "Humerus", correct: false },
            { text: "Femur ", correct: true },  
        ]
    },
    {
        question: "What is the normal range for human body temperature in Celsius?",
        answers: [
            { text: "34-35", correct: false },
            { text: "35-36", correct: false },
            { text: "36-37", correct: true }, 
        ]
    },
    {
        question: "The medical term for white blood cells is?",
        answers: [
            { text: "Leukocytes", correct: true },
            { text: "Thrombocytes", correct: false },
            { text: "Erythrocytes", correct: false },
        ]
    },
    {
        question: "How many chambers does the human heart have?",
        answers: [
            { text: "2", correct: false },
            { text: "6", correct: false },
            { text: "4", correct: true },
        ]
    },
    {
        question: "What is 2 + 2?",
        answers: [
            { text: "7", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false }, 
        ]
    },
    {
        question: "Who wrote the novel Animal Farm?",
        answers: [
            { text: "George Orwell", correct: true },
            { text: "George Bush", correct: false },
            { text: "Lalong Bako", correct: false },
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function select(selector) {
    return document.getElementById(selector);
  }
const scoreContainer = select('score-container');
const questionContainer = select('question-container');
const questionElement = select('question');
const answerButtons = select('answer-buttons');
const startButton = select('start-button');

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function startQuiz() {
    shuffleQuestions();
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showScore();
    }
}

function showScore() {
    questionContainer.style.display = 'none';
    scoreContainer.innerText = `Your score: ${score} out of ${questions.length}`;
    scoreContainer.style.display = 'block';
}

startButton.addEventListener('click', startQuiz);
questionContainer.style.display = 'none';
