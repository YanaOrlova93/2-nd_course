//задание1==========================
let i = 0;
while (i < 2) {
    console.log('Привет');
    i++;
}

//задание2============================
let q = 1;
while (q <= 5) {
    console.log(q);
    q++;
}

//задание3==========================
let w = 7;
while (w <= 22) {
    console.log(w);
    w++;
}

//задание4===========================
const object = {
    Kolya: '200', 
    Vasya: '300',
    Petya: '400',
}
for (let key in object) {
    console.log(`${key}: зарплата ${object[key]}долларов`); 
    break;
    }
    
//задание5==============================

let n =1000;
let num =0;
while (n>50) {
    num++;
    n/=2;
}
console.log(n);
console.log(num);

//задание6===============================

for (let day = 6; day <= 31; day+=7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}