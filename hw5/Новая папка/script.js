
//Задание 1=========================
function minNum(q,w) {
    if (q<w) {
        alert(q);
    }   else if (w<q) {
            alert (w);
        }
    }
    minNum (5,4);

//Задание 2=========================
function nameNum(e) {
    if (e%2==0) {
        alert('Число четное');
    }
    else {
        alert('Число нечетное')
    }
}
nameNum (6);

//Задание 3=========================
function printSquare(num4) {
    let square = num4 ** 2;
    console.log(square);
}
printSquare(5); 

function calcSquare (num5) {
    return num5 * num5;
}
console.log(calcSquare(36));




//Задание 4=======================
function askAge() {
    const userAge = Number(prompt('Сколько вам лет?'));
    if (userAge >= 0 && userAge <= 12) {
        alert ('Привет,друг!');
    }
    else if (userAge >= 13) {
        alert ('Добро пожаловать!');
    }
    else {
        alert ('Вы вввели неправильное значение');
    }
}
askAge();

//Задание 5===========================
function multNum(a, b) {
   if (!isNaN(a) && !isNaN(b)) {
    return a*b;
   } else {
    console.log('Одно или оба значения не являются числом.')
}
}
   multNum ('r',5);

//Задание 6==========================

function askNumber() {
    const userNumber = prompt('Введите число');

    if (isNaN(userNumber) || userNumber === "" || userNumber === " " || userNumber === null) {
        console.log ('Переданный параметр не является числом');

    } else {
        console.log(`${userNumber} в кубе равняется ${userNumber ** 3}`);
    }
}
askNumber();

//Задание 7===================

function getCircleArea() {
return Math.PI * this.radius * this.radius;
}
function getCirclePerimetr() {
    return Math.PI * 2 * this.radius;
    }

 const circle1 = {
    radius: 10,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimetr,
 };   
 const circle2 = {
    radius: 20,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimetr,
 };   
 console.log(circle1.getArea());
 console.log(circle1.getPerimeter());
 console.log(circle2.getArea());
 console.log(circle2.getPerimeter());