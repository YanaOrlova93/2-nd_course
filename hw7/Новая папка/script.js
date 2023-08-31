//Задание 1

let upperValue = "js";
console.log(upperValue.toUpperCase());


//Задание 2

function search(arr, start) {
    const string = start.toLowerCase();
    return arr.filter((str) => str.toLowerCase().startWith(string))

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
let currentDate = new Date();
console.log(currentDate);



//Задание 9

let currentDate1 = new Date(2023, 8, 24);
currentDate1.setDate(currentDate1() + 73);
console.log(currentDate1);


//Задание 10



//Задание 11
//работа с макетом
  


