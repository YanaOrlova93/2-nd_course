
//Задание 1====================================
let password = String('Скайпро');
let password2 = prompt ("Введите пароль");
if (password === password2) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

//Задание 2=========================================
let c = prompt('Введите число больше 0 и меньше 10');

if (c>0 && c<10) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

//Задание 3==========================================
let d = 105;
let e = 96;
if (d>100 && e>100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 4===================================

let a = '2';
let b = '3';
a = Number (a);
b = Number (b);
let o = (a+b);
alert(o);


//Задание 5================================
let monthNum = String(prompt('Введите номер месяца'));

switch (monthNum) {
    case '1':
    case '2':
    case '12':
    console.log('Зима')
    break;
    case '3':
    case '4':
    case '5':
    console.log('Весна');
    break;
    case '6':
    case '7':  
    case '8':
    console.log('Лето')
    break;
    case '9':   
    case '10':
    case '11':
    console.log('Осень')
    break;    
    default:
        console.log('Такого месяца нет');
        break;
}

//Задание 6=========
доп
//Задание 7===================================
let numb = Number(prompt('Пожалуйста, введите любое число'));
if (isNaN(numb)) {
    alert ('введите число!!!')
} else if (numb % 2 === 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}

//Задание 8======================================
let clientOS = confirm ('Ваша операционная система iOS');
if (clientOS === true) {
    console.log('Установите версию приложения для iOS по ссылке');
} else {
    console.log('Установите версию приложения для Android по ссылке');
}

//Задание 9======================
let clientDeviceYear = 2015;
clientOS = confirm('Ваша операционная система iOS');
if (clientOS ===true) {
    clientDeviceYear = Number (prompt('Укажите год выпуска телефона'));
    if (clientDeviceYear > 2015) {
    alert('Установите версию приложения для iOS по ссылке');
    } else {
    alert('Установите облегченную версию приложения для iOS по ссылке');
} 
}else {
    clientDeviceYear = Number (prompt('Укажите год выпуска телефона'));
    if (clientDeviceYear > 2015) {
    alert('Установите версию приложения для iOS по ссылке');
    } else {
    alert('Установите облегченную версию приложения для iOS по ссылке');
}
}