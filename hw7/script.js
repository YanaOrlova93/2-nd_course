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

function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * maxValue);
}
console.log(getRandomInt(0, 10));



//Задание 6

 function getRandomArrNumbers() {
    return Math.round(Math.random()*(maxValue-minValue));
 }
 console.log(getRandomArrNumbers);




//Задание 7

function newArray(x, y) {
  let array = [];
  for (let i = x; i <= y; i++) array.push(i);
 
  return  Math.random(array);
}       

//Задание 8
let currentDate = new Date();
console.log(currentDate);



//Задание 9

let currentDate1 = new Date(2023, 8, 24);
currentDate1.setDate(currentDate1() + 72);
console.log(currentDate1);


//Задание 10


let currentDate2 = new Date(2023, 8, 24);
currentDate2.setDate(currentDate1());
console.log(currentDate2);


//Задание 11

  


