const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);

const arr3 = Array.of(1,2,3);

console.log(arr3);

const arrP = Array(3);

console.log(arrP);

//const divs = document.querySelectorAll('div');
//
//const divArray = Array.from(divs);

//divArray.pop();
//divArray.shift();

//divs.pop();
//divs.shift();

const frutas = ['melancia', 'banana'];
const arrLength = frutas.push('laranja');
const removeItem = frutas.pop();
const addInicio = frutas.unshift('acerola');
const removInicio = frutas.shift();
const salgados = ['kibe', 'empada'];
const alimentos = frutas.concat(salgados);

console.log(arrLength);
console.log(frutas);
console.log(alimentos);

const nr = [1,2,3,4,5];
arr.slice(0,2);

arr.slice(2);

arr.slice(-1);

arr.slice(-3);

arr.splice(2);

//posição, não remove e add
arr.splice(0, 0, 'first');



