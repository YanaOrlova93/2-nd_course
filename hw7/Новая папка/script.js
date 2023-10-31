//Задание 1

let upperValue = "js";
console.log(upperValue.toUpperCase());


//Задание 2

function searchStart(arr, start) {
    const string = start.toLowerCase();
    return arr.filter((str) => str.toLowerCase().startsWith(string))

}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); 
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); 
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

//Задание 3

console.log(Math.floor(32.58884)); //32
console.log(Math.ceil(32.58884)) //33
console.log(Math.round(32.58884)); //33


//Задание 4

//52, 53, 49, 77, 21, 32.

alert( Math.max(52, 53, 49, 77, 21, 32) ); // 77
alert( Math.min(52, 53, 49, 77, 21, 32)); // 21

//Задание 5 

const randNum = () => Math.floor(Math.random()*10)+1;



//Задание 6
const getRandomArrNumbers = (num) => {
  let arr = [];
  for (let x = 0; x < Math.floor(num / 2); x++) {
    arr.push(Math.floor(Math.random() * (num = 1)));
  }
  return arr;
}
console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

//Задание 7

const getRandomNumbersDiap = (min, max) => Math.floor(Math.random() * (max-min));
console.log(getRandomNumbersDiap(3,40));

//Задание 8
let currentDate3 = new Date();
console.log(currentDate);



//Задание 9

const currentDate1 = new Date(2023, 8, 31);
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate.toDateString());



//Задание 10
function formatRussianDateAndTime(date) {
  const daysOfWeek = [
      'воскресенье',
      'понедельник',
      'вторник',
      'среда',
      'четверг',
      'пятница',
      'суббота'
  ];

  const months = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря'
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const formattedDate = `Дата: ${day} ${month} ${year} - это ${dayOfWeek}.`;
  const formattedTime = `Время: ${hours}:${minutes}:${seconds}`;

  return `${formattedDate}\n${formattedTime}`;
}
const currentDate = new Date();
const formattedDateTime = formatRussianDateAndTime(currentDate);
console.log(formattedDateTime);



//Задание 11
//работа с макетом
  


