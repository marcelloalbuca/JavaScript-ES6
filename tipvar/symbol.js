const symbol1 = Symbol();
const symbol2 = Symbol();

console.log('symbol1 é igual a symbol2:', symbol1 === symbol2);

const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Marcello',
    [nameSymbol2]: 'Albuquerque',
    lastName: 'Cavalcanti'
}

console.log(user);

for (const key in user) {
    if (user.hasOwnProperty(key)) 
    {
     console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log(`Propiedades do objeto user:`, Object.keys(user));

console.log(`Valores das propriedades do objeto user:`, Object.values(user));

console.log(`Symbols registrados no objeto user:`, Object.getOwnPropertySymbols(user));

console.log(`Todas pripriedades do objeto user:`, Reflect.ownKeys(user));

const directions = {
    UP : Symbol( 'UP'),
    DOWN: Symbol( 'DOWN' ),
    LEFT: Symbol( 'LEFT' ),
    RIGHT: Symbol( 'RIGHT') 
};

//parte 2

const uniqueId = Symbol('hello');

const obj = {
    [uniqueId]: 'hello'
};

console.log(obj);

//well known symbols

Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1,2,3,4];

const it = arr[Symbol.iterator]();

while (true) {
    let {value, done} = it.next();

    console.log(value);
    
    if (done) {
        break;
    }
}

//ES6

for (let value of arr){
    console.log(value);
}

const str = 'Marcello';

for (let value of str) {
    console.log(value);
}

console.log(arr[Symbol.iterator]().next());

const obj = {
    values: [1,2,3,4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        }
    }
};

const it = obj[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (let value of obj) {
    console.log(value);
}

const arr = [...obj];



