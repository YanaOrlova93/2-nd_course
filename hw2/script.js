let a = 20; //1
alert (a + ' ответ на 1 вопрос');

let first = 2007; //2
alert(first + ' ответ на 2 вопрос');

let js = 'Brendan Eich'; //3
alert(js);


//=============================
let c = 10; //4
let b = 2;
let resultSum = c+b;
alert(resultSum);
let c1 = 10; //4
let b1 = 2;
let resultMin = c1-b1;
alert(resultMin);
let c2 = 10; //4
let b2 = 2;
let resultUm = c2*b2;
alert(resultUm);
let c3 = 10; //4
let b3 = 2;
let resultDel = c3/b3;
alert(resultDel);
//===========================

let d = (2**5); //5
let result1 = d;
alert(result1);

let a4 = 9; //6
let b4 = 2;
let result2 = a4%b4;
alert(result2);


let num = 1; //7
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);


let age = Number(prompt('Сколько вам лет?')); //8
alert(age);

const user = { //9
    name: 'Yana',
    age1: 29,
    isAdmin: true,
}
user.cityOfResidence = 'Moscow';
user.age1 = 30;
delete user.cityOfResidence;
let info = prompt('Какую информацию хотие узнать о пользователе?');
alert(user[info] || 'неккоректное значение');

let name2 = prompt ('Ваше имя?');
alert('Привет,  ' + name2 + '!')


