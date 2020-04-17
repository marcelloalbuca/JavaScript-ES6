'use strict';

class Person {
    static walk(){
        console.log('walking...');
    }

    #name = '';

    constructor(initialName) {
        this.#name = initialName;
    }

    setName(name) {
        this.#name = name;
    }

    getName(){
        return this.#name;
    }

    get name(){
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

console.log(Person.walk());

console.log(p);
p.getName();
p.name;
p.setName('Marcello');

class Animal {
    constructor(qtdePatas) {
        this.qtdePatas = 0;
    }
    movimentar() {}
}

class Cachorro extends Animal {
    constructor(morde) {
        super();
        this.qtdePatas = 4;
        this.morde = morde;
    }

    latir() {
        console.log("au au");
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);
console.log(pitbull);



