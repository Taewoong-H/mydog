const buttonThreeForm = document.querySelector('.js-btn3'),
    buttonFourForm = document.querySelector('.js-btn4'),
    buttonThree = buttonThreeForm.querySelector('button'),
    buttonFour = buttonFourForm.querySelector('button');
    resultLeft = document.querySelector('#result-img');

const SND_NUM_LS = "number";

const secondQuestionTwo = document.querySelector('.question2'),
    result = document.querySelector('.result');

const SND_SHOWING_CN = 'showing',
    SND_BLOCKING_CN = 'blocking';

function blockingShowing(){
    secondQuestionTwo.classList.remove(SND_SHOWING_CN);
    secondQuestionTwo.classList.add(SND_BLOCKING_CN);
    result.classList.remove(SND_BLOCKING_CN);
    result.classList.add(SND_SHOWING_CN);
}

function showResult(){
    const resultNum = localStorage.getItem(SND_NUM_LS);
    const img = new Image();
    if(resultNum==2){
        img.src = `img/1.png`;
        img.classList.add("img");
        resultLeft.appendChild(img);
        blockingShowing();
    }
    else if(resultNum==3){
        img.src = `img/2.jpg`;
        img.classList.add("img");
        resultLeft.appendChild(img);
        blockingShowing();
    }
    else if(resultNum==4){
        img.src = `img/3.png`;
        img.classList.add("img");
        resultLeft.appendChild(img);
        blockingShowing();
    }
}

function setNumber(num) {
    localStorage.setItem(SND_NUM_LS, num);
}

function sumNumFour() {
    const loadedNumber = localStorage.getItem(FST_NUM_LS);
    setNumber(parseInt(loadedNumber) + 2);
}

function sumNumThree() {
    const loadedNumber = localStorage.getItem(FST_NUM_LS);
    setNumber(parseInt(loadedNumber) + 1);
}

function handleSubmitFour(event){
    event.preventDefault();
    sumNumFour();
    showResult();
}

function handleSubmitThree(event){
    event.preventDefault();
    sumNumThree();
    showResult();
}


function init() {
    buttonThree.addEventListener("click", handleSubmitThree);
    buttonFour.addEventListener("click", handleSubmitFour);
}

init();