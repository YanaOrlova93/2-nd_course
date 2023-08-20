
//Задание 1=========================
function minNum() {
    let num1 = 0;
    let num2 = 0;
    if (num1<num2) {
        alert(num1);
    }   else if (num2<num1){
            alert (num2)
        }
        else if (num2=num1){
            alert(num1)
        }
    }

//Задание 2=========================
function name(params) {
    let num3 = 3;
    if (num3%2==0) {
        alert('Число четное');
    }
    else {
        alert('Число нечетное')
    }
}

//Задание 3=========================
function printSquare(num4) {
    let square = num4 ** 2;
    console.log(square);
}
printSquare();

function calcSquare (num4) {
   return num4 ** 2;
}
calcSquare();


//Задание 4=======================
function askAge() {
    const userAge = Number(prompt('Сколько вам лет?'));
    if (userAge = 0 && userAge<=12) {
        alert ('Привет,друг!');
    }
    else if (userYears >=13) {
        alert ('Добро пожаловать!');
    }
    else {
        alert ('Вы вввели неправильное значение');
    }
}
askAge();

//Задание 5===========================
function mult(a, b) {
    let c = prompt('Введите число');
    if (isNaN (Number(c)) || c === ' ' || c === null || c==='') {
        return('Одно или оба значения не являются числом');
    } else {
    return c = (a*b);     
}
}
alert(mult(2,3));

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
 console.log(circle1.getPerimetr());
 console.log(circle2.getArea());
 console.log(circle2.getPerimetr());
       
