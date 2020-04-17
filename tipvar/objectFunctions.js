const user = {
    name: 'Marcello',
    lastName: 'Albuquerque'
}

console.log(`Propriedades do objeto user:`, Object.keys(user));

console.log(`\nValor das propriedades do objeto user:`, Object.values(user));

console.log(`\nLista de propriedades e valores:`, Object.entries(user));

Object.assign(user, {fullName: 'Marcello Cavalcanti'});

console.log(`\nAdiciona a propriedade fullName no objeto user`, user);
console.log(`\nRetorna um novo objeto mergeando dois ou mais objetos`, Object.assign({}, user, {age: 26}));

const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';


console.log(`\nVariável newObj após as alterações:`, newObj);

const person = { name: 'Marcello' };
Object.seal(person);

person.name = 'Marcello 2 '
delete person.name;
person.age = 26;

console.log(`\nVariável person após as alterações`, person)