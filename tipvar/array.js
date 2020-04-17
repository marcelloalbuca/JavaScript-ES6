const users = ['Guilherme', 'Marcello', 'Jennifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Marcello',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Jennifer',
        age: 17,
        gender: gender.WOMAN
    },
];

console.log('Items:', persons.length);

console.log('A variável persons é um array:', Array.isArray(persons));

persons.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name} index: ${index}`, arr);
});

const mens = persons.filter(person => person.gender === gender.MAN);
console.log(`\nNova lista apenas com homens:`, mens);

const personWithCourse = persons.map(person => {
    person.course = 'Introdução  ao JavaScript';
    return person;
});

console.log(`\nPersons com a adição do course:`, personWithCourse);

//array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log(`\nSoma das idade das pessoas`, totalAge);

const totalEvenAges = persons
                    .filter(person => person.age % 2 === 0)
                    .reduce((age, person) => {
                        age+= person.age;
                        return age;

                    }, 0);
console.log(`\nSoma de idades das pessoas que possuem idade par`, totalEvenAges);