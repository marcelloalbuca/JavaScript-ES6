const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged', data);
        }, 1000);
    }
}

const users = new Users();

//user.once consumir apenas 1x
users.on('User logged', data => {
    console.log(data);
});

users.userLogged({ user : 'Marcello Albuquerque'});
users.userLogged({ user : 'Bruno'});

//EventTarget eventos browser
