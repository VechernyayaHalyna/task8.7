// Кнопки
let wantPlay = document.querySelector('#want-play');
let start = document.querySelector('#submit');
let gameButton = document.querySelector('#to-game');

// Модальные окна
let firstPage = document.querySelector('.greeting');
let firstModal = document.querySelector('#modal-input');
let secondModal = document.querySelector('#start');
let gameModal = document.querySelector('.game-start');


// Игра
let minValue = +document.querySelector('#min').value;
let maxValue = +document.querySelector('#max').value;
let userMin = document.querySelector('#user-min');
let userMax = document.querySelector('#user-max');
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

// Поля игры
let orderNumberField = document.querySelector('#orderNumberField');
let answerField = document.querySelector('#answerField');

orderNumberField.innerText = orderNumber;


// Открытие первого модального окна
wantPlay.addEventListener('click', () => {
    firstModal.classList.add('modal-active');
    firstPage.classList.add('greeting-non-active');
})

// Открытие второго модального окна
start.addEventListener('click', () => {
    firstModal.classList.remove('modal-active');
    secondModal.classList.add('modal-active');

    userMin = minValue;
    userMax = maxValue; 

    if ((isNaN(minValue) || isNaN(maxValue)) || ((typeof minValue != number) || (typeof maxValue != number))) {
        minValue = 1;
        maxValue = 100;
    }
})

// Начало игры
gameButton.addEventListener('click', () => {
    secondModal.classList.remove('modal-active');
    gameModal.classList.add('game-start-active');
})


let phraseRandom = Math.round(Math.random() * 3);
let answerPhrase;
if ((phraseRandom === 1)) {
                           answerPhrase = `Вы загадали число ${answerNumber }?`;
                        } else if (answerPhrase = (phraseRandom === 2)) {
                           answerPhrase = `Пфффф, проще простого! Это число ${answerNumber }?`;
                        } else {
                           answerPhrase = `Сейчас обалдеешь. Я знаю, что ты загадал ${answerNumber }! Да?`;
                        }

                        answerField.innerText = answerPhrase;

document.querySelector('#btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
    gameModal.classList.remove('game-start-active');
    firstModal.classList.add('modal-active');

    minValue = +document.querySelector('#min').value;
    maxValue = +document.querySelector('#max').value;

    answerNumber  = Math.floor((minValue + maxValue) / 2); 
    orderNumber = 1; 
    gameRun = true; 

    orderNumberField = document.querySelector('#orderNumberField');

    orderNumberField.innerText = orderNumber;
       
    let phraseRandom = Math.round(Math.random() * 3);
    let answerPhrase;
    if ((phraseRandom === 1)) {
                            answerPhrase = `Вы загадали число ${answerNumber }?`;
                            } else if (answerPhrase = (phraseRandom === 2)) {
                            answerPhrase = `Пфффф, проще простого! Это число ${answerNumber }?`;
                            } else {
                            answerPhrase = `Сейчас обалдеешь. Я знаю, что ты загадал ${answerNumber }! Да?`;
                            }

                            answerField.innerText = answerPhrase;

})

document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue)
        {
            let phraseRandom = Math.round(Math.random() * 3);
            let answerPhrase;
            if (phraseRandom === 1) {
               answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
            } else if (answerPhrase = (phraseRandom === 2)) {
                answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
            } else {
                answerPhrase = `Ну и задачка...\n\u{1F612}`;
            }
        }    

            answerField.innerText = answerPhrase; 
            gameRun = false; 
        } else {
            minValue = answerNumber  + 1; 
            answerNumber  = Math.floor((minValue + maxValue) / 2); 
            orderNumber++; 
            orderNumberField.innerText = orderNumber; 
            
            let phraseRandom = Math.round(Math.random() * 3);
            let answerPhrase;
            if ((phraseRandom === 1)) {
                           answerPhrase = `Вы загадали число ${answerNumber }?`;
                        } else if (answerPhrase = (phraseRandom === 2)) {
                           answerPhrase = `Пфффф, проще простого! Это число ${answerNumber }?`;
                        } else {
                           answerPhrase = `Сейчас обалдеешь. Я знаю, что ты загадал ${answerNumber }! Да?`;
                        }

                        answerField.innerText = answerPhrase;
                    }
})

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue)
        {
            let phraseRandom = Math.round(Math.random() * 3);
            let answerPhrase;
            if (phraseRandom === 1) {
               answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
            } else if (answerPhrase = (phraseRandom === 2)) {
                answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
            } else {
                answerPhrase = `Ну и задачка...\n\u{1F612}`;
            }
        }  

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1; 
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumber++; 
            orderNumberField.innerText = orderNumber; 
            let phraseRandom = Math.round(Math.random() * 3);
            let answerPhrase;
            if ((phraseRandom === 1)) {
                           answerPhrase = `Вы загадали число ${answerNumber }?`;
                        } else if (answerPhrase = (phraseRandom === 2)) {
                           answerPhrase = `Пфффф, проще простого! Это число ${answerNumber }?`;
                        } else {
                           answerPhrase = `Сейчас обалдеешь. Я знаю, что ты загадал ${answerNumber }! Да?`;
                        }

                        answerField.innerText = answerPhrase;
                    }
})


document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        let phraseRandom = Math.round(Math.random() * 3);
        let answerPhrase;
        if (phraseRandom === 1) {
                answerPhrase = `Я всегда угадываю\n\u{1F44C}`;
            } else if (answerPhrase = (phraseRandom === 2)) {
                answerPhrase = `Мастер в здании\n\u{1F60E}`;
            } else {
                answerPhrase = `Я справился, а ты бы смог?\n\u{1F525}`;
            }
        answerField.innerText = answerPhrase;
        gameRun = false;
        firstPage.classList.remove('greeting-non-active');
        gameModal.classList.remove('game-start-active');
    }
})