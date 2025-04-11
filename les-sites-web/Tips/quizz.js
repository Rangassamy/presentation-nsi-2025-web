const questions = [
    {
        question: "Quelle est l'equipe de football qui a remporté le plus de ligue des champion",
        choices: ["Paris Saint Germain", "FC Barcelone", "Bayern Munich", "Real Madrid"],
        correctAnswer: 3
    },
    {
        question: "Qui est le GOAT!!!!!!!!",
        choices: ["Lionel Messi", "Neymar Jr", "Kylian Mbappé", "Cristiano Ronaldo "],
        correctAnswer: 3
    },
    {
        question: "Quelle match n'est pas un derby",
        choices: ["Chealse vs Arsenal", "Olympique Marseille vs Olympique Lyonnais" ,"AC Milan vs Inter", "Real Madrid vsAtletico"],
        correctAnswer: 1
    },
	{
		question: "Quelle match n'est pas un classique",
		choices: ["Paris Saint Germain vs Olympique Marseille", "Real Madrid vs FC Barcelone", "Juventus vs Atalanta Bergame", "Arsenal vs Manchester City", "Bayern Munich vs Borussia Dortmund"],
		correctAnswer: 2
	}
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => checkAnswer(index);
        choicesElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
        alert("Bonne réponse !");
    } else {
        alert("Mauvaise réponse !");
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<h2>Vous avez terminé le quiz !</h2><p>Votre score est de ${score} sur ${questions.length}.</p>`;
}

window.onload = loadQuestion;
