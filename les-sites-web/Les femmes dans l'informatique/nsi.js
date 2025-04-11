const startBtn= document.querySelector('.start');
const quizzSection= document.querySelector('.quizz-section');
const quizzBox= document.querySelector('.quizz-box');
const resultatBox= document.querySelector('.result-box');
const reessaieBtn= document.querySelector('.reessaie-btn');
const accueilBtn= document.querySelector('.accueil-btn');



startBtn.onclick =() => {
    quizzSection.classList.add('active');
    quizzBox.classList.add('active');

    showQuestions(0);
    questionCompteur(1);
    headerScore();

}

reessaieBtn.onclick =() => {
    quizzBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultatBox.classList.remove('active');

    questionCompte=0;
    questionNum=1;
    userScore=0;
    showQuestions(questionCompte);
    questionCompteur(questionNum);

    headerScore() ;
    if (nextBtn) nextBtn.classList.remove('active');
}

accueilBtn.onclick =() => {
    quizzSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultatBox.classList.remove('active');

    questionCompte=0;
    questionNum=1;
    userScore=0;
    showQuestions(questionCompte);
    questionCompteur(questionNum);

}



let questionCompte=0;
let questionNum=1;
let userScore=0;

const nextBtn= document.querySelector('.next-btn');
console.log(nextBtn);

nextBtn.onclick =() => {
    if (questionCompte < questions.length-1) {
        questionCompte++;
        showQuestions(questionCompte);

        questionNum++;
        questionCompteur(questionNum);

        nextBtn.classList.remove('active');
    }
    else {
        showResultatBox();
    }
}
const optionList = document.querySelector('.option-list');

function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent=`${questions[index].num}. ${questions[index].question}`;

    let optionTag=`<div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>`;
    
    optionList.innerHTML=optionTag;

    const option = document.querySelectorAll('.option');
    for (let i =0; i< option.length; i++){
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer =  questions[questionCompte].answer;
    let alloptions= optionList.children.length;
    
    if (userAnswer ==correctAnswer) {
        answer.classList.add('bon');
        userScore+=1;
        headerScore();
    }
    else {
        answer.classList.add('bad');

        for (let i=0; i<alloptions; i++) {
            if (optionList.children[i].textContent==correctAnswer) {
                optionList.children[i].setAttribute('class', 'option bon');
            }
        }
    }
 
    for (let i=0; i<alloptions; i++) {
        optionList.children[i].classList.add('disabled');
    }
    nextBtn.classList.add('active');
}


function questionCompteur(index) {
    const questionTotal =document.querySelector('.question-total');
    questionTotal.textContent= `${index} of ${questions.length}`;
}

function headerScore (){
    const headerScoreText = document.querySelector('.header-score')
    headerScoreText.textContent= `Score: ${userScore} /${questions.length}`;

}

function showResultatBox(){
    quizzBox.classList.remove('active');
    resultatBox.classList.add('active');

    const scoreText= document.querySelector('.score-text');
    scoreText.textContent=`Ton score est de ${userScore} sur ${questions.length}`;  
}