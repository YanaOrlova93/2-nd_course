let a = 20; //1
alert (a + ' ответ на 1 вопрос');

let first = 2007; //2
alert(first + ' ответ на 2 вопрос');

let js = 'Brendan Eich'; //3
alert(js);


let c = Number(10); //4
let b = Number(2);
let result = c-b;
alert(result);

let d = Number(2**5); //5
let result1 = d;
alert(result1);

let a1 = 9; //6
let b1 = 2;
let result2 = a1%b1;
alert(result2);

let num = 1; //7
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);


let age = Number(prompt('Сколько вам лет?')); //8
alert(age);

const user = { //9
    name: 'Yana',
    age1: 29,
    isAdmin: true,
    cityOfResidence: 'Moscow',
}
user.cityOfResidence;
user.age1 = 30;
delete user.cityOfResidence;
let info = prompt('Какую информацию хотие узнать о пользователе?');
alert(user[info] || 'неккоректное значение');

let name2 = prompt ('Ваше имя?');
alert('Привет,  ' + name2 + '!')


