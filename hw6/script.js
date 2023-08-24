//Задание 1

const product = [1, 5, 4, 10, 0, 3];
for (let i = 0; i <product.length; i++) {
    if( product[i] ==10) break;
    console.log (product[i]);
}


//Задание 2

const product2 = [1, 5, 4, 10, 0, 3];
console.log(product2.indexOf(4));


//Задание 3

let product3 = [1, 3, 5, 20];
product3 = product3.join('');
console.log(product3);


//Задание 4

let arr = [1, 1, 1];

for (let i = 0; i < 1; i++) {
	arr[i] = []; 
	
	for (let j = 0; j < 1; j++) {
		arr[i].push(j + 1); 
			
	}
}

console.log(arr);


//Задание 5 

let product5 = [1, 1, 1];
product5.push(2, 2, 2);
console.log(product5);


//Задание 6

const product6 = [9, 8, 7, 'a', 6, 5];
product6.sort();
console.log(product6);


//Задание 7

const numbersArray = [9, 8, 7, 6, 5];
const userInput = prompt('Угадайте число');
if (numbersArray.includes(userInput)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}
        

//Задание 8
const originalString = 'abcdef';
const reversedString = originalString.split('').reverse().join('');

console.log(reversedString); // 'fedcba'


//Задание 9

let product9 = [
    [1, 2, 3],
    [4, 5, 6],
];
let arrayResult = product9.reduce((firstArray, secondArray) => firstArray.concat(secondArray), []);
console.log(arrayResult);


//Задание 10

let product10 = [2, 5, 7, 9];
let sum = 0;
for (let q = 0; q<product10.length-1; q++) {
let acElement = product10[q];
let nextElement = product10[q+1];
sum = acElement + nextElement;
console.log(sum);
}


//Задание 11

const array = [4, 5, 6];
let result = array.map(item =>(item **2) );
console.log(result);


//Задание 12

const getLenght = source => source.map(str => str.length);
 console.log(getLenght(['слово', 'длина', 'буква']));


   //Задание13
   function filterPositive(array) {
    return array.filter(number => number < 0);
   }
    const inputArray = [-2, 8, -5, 3, 0, -3];
    const negativeNumbers = filterPositive(inputArray);
    console.log(negativeNumbers);
   