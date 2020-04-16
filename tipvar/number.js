const myNumber = 12.9802;

const numberAsString = myNumber.toString();
console.log(`Número transformado em string:`, typeof numberAsString);

const fixedTwoDecimals = myNumber.toFixed(2);
console.log(`\nNúmero com duas casas decimais:`, fixedTwoDecimals);

console.log(`\nString parseada para float:`, parseFloat('13.22'));

console.log(`\nString parseada para int:`, parseInt('13.20'));