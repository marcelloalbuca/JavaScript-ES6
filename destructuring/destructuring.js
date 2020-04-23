var arr = ['apple', 'banana', 'orange'];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

var obj = {
    nome: 'Marcello',
    props: {
        age: 26
    }
};
var age = obj.props.age;
var name = obj.nome;

// Destructuring assigment

var [apple2, banana2, orannge2] = ['Apple', 'Banana', 'Orange'];

console.log(apple, apple2);

var obj = {
    nome: 'Marcello'
};
var {name} = obj;
var { name: name2 } = obj;

var obj = {
    nome: 'Marcello',
    props: {
        age: 26
    }
};

var { 
    props: {age} 
  }  = obj;

//para objeto
var [{ name }] = arr;

console.log(age);
console.log(name2);


//function
function sum([a, b] = [0, 0]) {
    return a + b;
}
connsole.log(sum());
//console.log(sum([5,5]));

function summ({a, b}) {
    return a + b;
}

console.log(summ({ a: 5, b: 5}));