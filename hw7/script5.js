
//game1


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
//game2

function guessWord() {
  let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  fruits = fruits.sort(() => Math.random() - 0.5);
  alert(fruits);

  let firstElem = prompt("Чему равнялся первый элемент массива?");
  let lastElem = prompt("Чему равнялся последний элемент массива?");

   for (let i = 0; i < fruits.length; i++) {

    if (firstElem === "" || firstElem === " " || firstElem === null) {
      alert('Не верный первый элемент');
  
    } else if (lastElem === "" || lastElem === " " || lastElem === null) {
      alert('Не верный последний элемент');

    } else if (fruits[0].toUpperCase().includes(firstElem.toUpperCase() && fruits[fruits.lenght -1]).toUpperCase().includes(lastElem.toUpperCase())) {
      alert('Поздравляю с победой!');

    }else if (fruits[0].toUpperCase().includes(firstElem.toUpperCase()) || fruits[fruits.lenght -1].toUpperCase().includes(lastElem.toUpperCase())) {
      alert('Не угадал');

    }
    break
   
  }
  
}



