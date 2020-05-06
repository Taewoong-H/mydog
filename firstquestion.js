const buttonOneForm = document.querySelector('.js-btn1'),
    buttonTwoForm = document.querySelector('.js-btn2'),
    buttonOne = buttonOneForm.querySelector('button'),
    buttonTwo = buttonTwoForm.querySelector('button');

const firstQuestionOne = document.querySelector('.question1');
    firstQuestionTwo = document.querySelector('.question2');

const FST_SHOWING_CN = 'showing',
    FST_BLOCKING_CN = 'blocking';

const FST_NUM_LS = 'number';

function nextQuestion() {
    firstQuestionOne.classList.remove(FST_SHOWING_CN);
    firstQuestionOne.classList.add(FST_BLOCKING_CN);
    firstQuestionTwo.classList.remove(FST_BLOCKING_CN);
    firstQuestionTwo.classList.add(FST_SHOWING_CN);
}

function setNumber(num) {
    localStorage.setItem(FST_NUM_LS, num);
}

function sumNumOne() {
    const loadedNumber = localStorage.getItem(FST_NUM_LS);
    if(loadedNumber === null) {
        setNumber(1);
        nextQuestion();
    } else {
        localStorage.clear()
        setNumber(1);
        nextQuestion();
    }
}

function sumNumTwo() {
    const loadedNumber = localStorage.getItem(FST_NUM_LS);
    if(loadedNumber === null) {
        setNumber(2);
        nextQuestion();
    } else {
        localStorage.clear()
        setNumber(2);
        nextQuestion();
    }
}

function handleSubmitOne(event){
    event.preventDefault();
    sumNumOne();
}

function handleSubmitTwo(event) {
    event.preventDefault();
    sumNumTwo();
}

function init() {
    buttonOne.addEventListener('click', handleSubmitOne);
    buttonTwo.addEventListener('click', handleSubmitTwo);
}


init();