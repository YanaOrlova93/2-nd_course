//Задание 1

const product = [1, 5, 4, 10, 0, 3];
for (let i = 0; i <product.length; i++) {
    if( product[i] ==10) break;
    console.log (product[i]);
}


//Задание 2

const product2 = [1, 5, 4, 10, 0, 3];
product2.forEach((el, index) => {
	console.log(`${index}: ${el}`);
});


//Задание 3

let product3 = [1, 3, 5, 20];
product3 = product3.join('');
console.log(product3);


//Задание 4

let product4 =[
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
]
console.log(product4);


//Задание 5 

let product5 = [1, 1, 1];
product5.push(2, 2, 2);
console.log(product5);


//Задание 6

const product6 = [9, 8, 7, 'a', 6, 5];
product6.sort();
console.log(product6);


//Задание 7

let product7 = [9, 8, 7, 6, 5];
    let p = Number(prompt('Угадай число'));
    if (product7) {
         alert('Угадал');
          } else {
            alert('Не угадал');
    }
        

//Задание 8

let product8 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(product8.reverse);

    

//Задание 9

let product9 = [
    [1, 2, 3],
    [4, 5, 6],
];
let arrayResult = [product9.length]
for (let i=0; i<=product9.length; i++) {
    for (let y=0; y<=product9[i].length; y++)
    product9[i][y]=arrayResult.unshift;
console.log(arrayResult);
}

//Задание 10
//Задание 11
//Задание 12


