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