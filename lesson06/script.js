'use strict';

function randomNumber() {
    let random = Math.floor(Math.random() * (100 - 0) + 0);
    let begin = confirm('Угадай число от 1 до 100');

    if (begin === false) {
        return alert('Игра окончена');
    }
    

    function guessNumber() {
        let inputNumber = prompt('Введите число от 1 до 100');
        
        if (inputNumber === null) {
            return alert('Игра окончена');
        }

        if (inputNumber === '' || isNaN(inputNumber)) {
            alert('Введите число');
            return guessNumber();
        }
        
        if (inputNumber > random) {
            alert('Загаданное число меньше');
            return guessNumber();
        }

        if (inputNumber < random) {
            alert('Загаданное число больше');
            return guessNumber();
        }

        if (+inputNumber === random) {
           return alert('Поздравляю, вы победили!');
        }
    }
    guessNumber(random);
}
randomNumber();