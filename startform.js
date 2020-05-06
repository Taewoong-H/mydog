const startButton = document.querySelector('.btn');
const main = document.querySelector('.title-box');
const questionOne = document.querySelector('.question1');

const SHOWING_CN = 'showing',
    BLOCKING_CN = 'blocking';



function firstQuestion() {
    main.classList.add(BLOCKING_CN);
    questionOne.classList.remove(BLOCKING_CN);
    questionOne.classList.add(SHOWING_CN);
}

function init() {
    startButton.addEventListener('click', firstQuestion);
}

init();
