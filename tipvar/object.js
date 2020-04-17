let user = {
    name: 'Marcello'
};

user.name = 'Marcello 1';
user['name'] = 'Marcelo 2';

const prop = 'name';
user[prop] = 'Marcello 3';

function getProp(prop) {
    return user[prop]
}

user.lastName = 'Albuquerque';

delete user.name;

console.log(user);

