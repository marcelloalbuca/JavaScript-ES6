'use strict';

function Animal(name) {
    let name = name;

    this.getName = function(){
        return name;
    }

    this.setName = function(newName) {
        name = newName;
    }

    Object.defineProperty(this, 'name', {
        get: function() {
            return name;
        },
        set: function(value) {
            name = value;
        }
    });
}

Animal.walk = function(){
    console.log('walking...');
}
console.log(Person.walk());

console.log(p);
p.getName();
p.name;
p.setName('Marcello');

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function() {}

function Cachorro(morde){

    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latit = function(){
    console.log("au au");
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);

