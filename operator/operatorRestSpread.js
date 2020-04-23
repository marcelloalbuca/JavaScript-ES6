//spread operator...
// string, arrays, objects, objetos iteraveis

const str = 'Marcello';

function logArgs(...args){
    console.log(args);
}

logArgs(...str);

const arr = [1,2,3,4];

function logArr() {
    console.log(arguments);
}

logArr(...arr);

const arr2 = [...arr, 5, 6, 7];
const arr3 = [5, 6, 7,...arr];
console.log(arr2);


const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
};

console.log(obj2);

const objMerge = {
    ...obj2,
    ...obj
};

console.log(objMerge);

//rest operator ...

function sum3 (...args) {
    
    //console.log(args);
    return args.reduce((acc, value) =>
                //valor inicial
    acc + value, 0);
}

console.log(sum3(5,2,5,10));

const sum4 = (a, b, ...rest) => {
    console.log(a,b,rest);
};

console.log(sum4(5,2,5,10));

const multiply = (...args) => 
    args.reduce((acc, value) =>
    acc * value, 1);

const sum5 = (...rest) => {
   return multiply.apply(undefined, rest);
};

console.log(sum5(5,2,5,10));
console.log(multiply);


function sum(a, b){
    //console.log(arguments);
}

function sum2(a,b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}

console.log(sum2(5,2,5,10));


