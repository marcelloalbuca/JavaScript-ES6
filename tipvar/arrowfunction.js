this.name = 'Nome do contexto de criação';

const getNameArrowRn = () => this.name;

function getName(){
    return this.name;
}

const user = {
    name: 'Marcello',
    getNameArrowRn,
    getName
}

console.log(user.getNameArrowRn());
console.log(user.getName());

