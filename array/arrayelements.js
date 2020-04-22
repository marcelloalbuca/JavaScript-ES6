const arr = [1,2,3,4,5];

arr.forEach((value, index, arr) =>{
    console.log(`${index}: ${value} => ${arr}`);
})

const arr2 = [1,2,3,4];
//arr2.map(value => value * 2);
console.log(arr2.map(value => value *2));

const arrFlat = [1,2,3,[4,5,[80,90]]];
console.log(arrFlat);
// console.log(arrFlat.flat(2));
//const arrFlat2 = arrFlat.flat(2);

//console.log(arrFlat2);

const arr3 = [1,2,3,4,5,6];

//console.log(arr3.flatMap(value => [value *2]));

//sconsole.log(arr3.flatMap(value => [[value *2]]));

const arr4 = [1,2,3,4];

const arrInterator = arr4.keys();
const arrInterator2 = arr4.values();
const arrInterator3 = arr4.entries();
arrInterator.next();

const arr5 = [1,2,3,4];

const firstArr = arr5.find(value => value > 2);
console.log(firstArr);

const arr6 = [1,2,3,4];

const firstArr2 = arr6.findIndex(value => value > 2);
console.log(firstArr2);

const arr7 = [1,2,3,4];

const firstArr3 = arr7.filter(value => value > 2);
console.log(firstArr3);


const arr8 = [1,2,3,4];

const firstArr4 = arr8.indexOf(3);
console.log(firstArr4);

const arr9 = [1,2,3,4];

const firstArr5 = arr9.lastIndexOf(3);
console.log(firstArr5);

const nomes = ['marcello', 'ale', 'carlos'];

const hasnItem = nomes.includes('marcello');
console.log(hasnItem);

const hasnItem2 = nomes.includes('marcello3');
console.log(hasnItem2);

const resto = [1,2,3,4,5,6];

const nrPar = resto.some(value => value % 2 === 0);
const nrPar2 = resto.every(value => value % 2 === 0);
//
//const studants = studants.sort((current, next) => current.grade - next.grade);

console.log(nrPar);
console.log(nrPar2);






