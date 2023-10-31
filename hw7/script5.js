
//game1

function Season() {
let month = Number(prompt('Номер месяца'));
switch (month) {
  case 12:
  case 1:  
  case 2:
    alert('Зима');
    break;


  case 3:
  case 4:  
  case 5:
    alert('Весна');
    break;

  case 6:
  case 7:  
  case 8:
    alert('Лето');
    break;

    case 9:
  case 10:  
  case 11:
    alert('Осень');
    break;
  
  default:
    break;
} 
}
Season();
//game2


function Fruits () {
const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

// Функция для перемешивания массива случайным образом
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Перемешиваем массив
shuffleArray(fruits);
alert (fruits);
// Получаем ответы пользователя
const firstGuess = prompt('Чему равнялся первый элемент массива?');
const lastGuess = prompt('Чему равнялся последний элемент массива?');

// Проверяем ответы пользователя
if (firstGuess === fruits[0].toLowerCase() && lastGuess === fruits[fruits.length - 1].toLowerCase()) {
    alert('Поздравляем! Вы угадали оба элемента.');
} else if (
    (firstGuess === fruits[0].toLowerCase() && lastGuess !== fruits[fruits.length - 1].toLowerCase()) ||
    (firstGuess !== fruits[0].toLowerCase() && lastGuess === fruits[fruits.length - 1].toLowerCase())
) {
    alert('Вы были близки к победе!');
} else {
    alert('Вы ответили неверно.');
}
}
Fruits ();