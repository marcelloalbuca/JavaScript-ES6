function multiply (a, b) {
    b = typeof b === 'undefined' ? 1 : b;

    return a * b;

}
console.log(multiply(5));

function multiply2 (a, b = 1) {
    return a * b;
}
console.log(multiply2(5));

function multiply2 (a, b = a) {
    return a * b;
}
console.log(multiply2(5));

//lazy evaluation

function randonNumber() {
    console.log('Generating a random number...');
    return Math.random() * 10;
}

//console.log(randonNumber());

function soma (a, b = randonNumber()) {
    return a + b;
}

console.log(soma(6));
console.log(soma(6));