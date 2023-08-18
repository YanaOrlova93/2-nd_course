
//Задание 1==================================
let password = String('Скайпро');
let password2 = prompt ("Введите пароль");
if (password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
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
let result = a + b ;
alert (result);

//Задание 5================================
let monthNum = String(prompt('Введите номер месяца'));

switch (monthNum) {
    case '1':
        console.log('Зима')
        break;
    case '2':
        console.log('Зима')
        break;
    case '3':
        console.log('Весна')
            break;
    case '4':
        console.log('Весна')
            break;
    case '5':
            console.log('Весна')
            break;
    case '6':
            console.log('Лето')
            break;
    case '7':
            console.log('Лето')
            break;
    case '8':
            console.log('Лето')
            break;
    case '9':
            console.log('Осень')
            break;
    case '10':
            console.log('Осень')
            break;
    case '11':
            console.log('Осень')
            break;    
    case '12':
        console.log('Зима')
        break;

    default:
        console.log('Такого месяца нет');
        break;
}

//Задание 6=========
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