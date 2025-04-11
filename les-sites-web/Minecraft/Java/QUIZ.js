const questions = [
    {
        question: "Quel est le materiau le plus resistant dans Minecraft ?",
        options: ["Pierre", "Fer", "Diamant", "Netherite"],
        answer: "Netherite"
    },
    {
        question: "Quel est le nom du boss final dans Minecraft ?",
        options: ["Dragon de l'End", "Dragon du Nether", "Dragon de la fin", "Dragon de l'Overworld"],
        answer: "Dragon de l'End"
    },
	{
        question: "Quel est le type de Creature du loup dans Minecraft ?",
        options: ["Creature Hostile", "Creature Neutre", "Creature Passives", "Creature Cool"],
        answer: "Creature Neutre"
    },
	{
        question: "Les ecritures des enchantements ont elles une signification ? ",
        options: ["Biensur que non, c'est juste aleatoire", "Oui, c'est en Morse ", "Non... :/", "Oui, c'est en l'alphabet galactique"],
        answer: "Oui, c'est en l'alphabet galactique"
    },
	{
        question: "Quel est le mouton le plus rare du jeux ?",
        options: ["Le mouton sans poils", "Ils ont tous la meme chance de spawn", "Le mouton bleu", "Le mouton rose"],
        answer: "Le mouton rose"
    },
	{
        question: "Combien y a t-il de couleurs d'axolotls differentes ?",
        options: ["5", "3", "6", "4"],
        answer: "5"
    },
	{
        question: "Quelles sont les chances de tomber sur un bebe zombie-villageois en armure en diamant enchante avec un epee en fer enchante sur un poulet ? ",
        options: ["1 zombie sur 351 967", "1 zombie sur 897 867 565", "IMPOSSIBLE", "Il n'y a que ca..."],
        answer: "1 zombie sur 897 867 565"
    },
	{
        question: "Qui est HeroBrine ?",
        options: ["Un esprit qui hante les joueurs", "juste un chien mignon", "Le personnage principal", "Le createur du jeux"],
        answer: "Un esprit qui hante les joueurs"
    },
	{
        question: "En quoi le joueur est mechant ?",
        options: ["Il est juste gentil, il aide le monde a devenir meilleur", "Le jeu incite a tuer des villageois", "Car il modifie l'ecosysteme et exploite les resource", "Il est une erreur qui tue tout ce qui bouge"],
        answer: "Car il modifie l'ecosysteme et exploite les resource"
    },	
	{
        question: "En quoi la cite des abimes infecte l'over-world ?",
        options: ["Car les creatures qui ce situe prenne le controle de l'over-world", "Car des blocs de cette zone se rependent dans l'over-world", "Elle modifie le generation du monde", "Tous les arbres autour de cette zone meurs"],
        answer: "Car des blocs de cette zone se rependent dans l'over-world"
	},
    {
        question: "Question subsidiaire, quelle est la veritable orthographe du mot 'Quizzz' ?",
        options: ["Quizz", "Quiz", "Quizs", "Kwiz"],
        answer: "Quiz"
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const restartButton = document.getElementById('restart-button');
const scoreElement = document.getElementById('score');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
	
    currentQuestion.options.forEach(option => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(option));
        li.appendChild(button);
        optionsElement.appendChild(li);
    });
}

function loadQuestion() {
	restartButton.classList.add('hidden');
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
	
    currentQuestion.options.forEach(option => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => {
			checkAnswer(option);
			currentQuestionIndex++;
			if (currentQuestionIndex < questions.length) {
				loadQuestion();
			}
			else {
				scoreElement.textContent = `Quiz terminé ! Votre score est ${score} sur ${questions.length}`;
				restartButton.classList.remove('hidden');
			} 
		});
        li.appendChild(button);
        optionsElement.appendChild(li);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    scoreElement.textContent = `Score : ${score}`;
}

restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
	score = 0;
	scoreElement.textContent = `Score : ${score}`;
	loadQuestion();
});

loadQuestion();
