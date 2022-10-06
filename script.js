// Вводные данные
let minValue = parseInt(prompt('Минимальное знание числа для игры', '-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
minValue < -999 ? minValue = -999 : minValue;
maxValue > 999 ? maxValue = 1000 : maxValue;

// Запуск игры
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2); 
let orderNumber = 1; 
let gameRun = true; 

let orderNumberField = document.querySelector('#orderNumberField');
let answerField = document.querySelector('#answerField');

orderNumberField.innerText = orderNumber;

// Варианты ответа "выигрыша"
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
                        

    // Кнопка "заново"
document.querySelector('#btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;

    minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
    minValue = minValue || -999;
    maxValue = maxValue || 999;
    minValue < -999 ? minValue = -999 : minValue
    maxValue > 999 ? maxValue = 1000 : maxValue;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

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

// Кнопка "больше"
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

// Кнопка "меньше"
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

// Кнопка "верно"
document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 2);
        switch (phraseRandom) {
            case 0:
                answertext = `Я всегда угадываю\n\u{1F44C}`;
                break;
            case 1:
                answertext = `Мастер в здании\n\u{1F60E}`;
            break;
            case 2:
                answertext = `Я справился, а ты бы смог?\n\u{1F525}`;
            break;
        }
        answerField.innerText = answertext;
        gameRun = false;
    }
})