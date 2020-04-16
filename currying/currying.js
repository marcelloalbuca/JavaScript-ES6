function soma(a) {
    return function(b) {
        return a + b;
    }
}

const soma2 = soma(2);

soma(2);
soma(3);
soma(4);
soma(5);
console.log(soma2(2));