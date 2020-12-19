/*
Вывести все пятизначные числа, которые делятся на 2, у которых средняя цифра
нечетная, и сумма всех цифр делится на 4
*/
for(let i = 10000;i <= 99999; i++) {
flagBin = false;
flagMid = false;
flagSum = false;
sum = 0;
if (i % 2 === 0) {
flagBin = true;
}
if ((i / 100) % 2 === 1 ) {
flagMid = true;
}
for(let j = 0; j < 5; j++) {
sum +=i % 10;
i = i / 10; 
}
if (sum % 4 === 0) {
flagSum = true;
}
if(flagBin && flagMid && flagSum) {
console.log(i);
}
}
