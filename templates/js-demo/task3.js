let num = +prompt("Write 3-digit number");
let n1 = (num - num % 100) / 100;
let n2 = (num - num % 10) / 10 - n1 * 10;
let n3 = num % 10;

console.log(n1)
console.log(n2)
console.log(n3)
