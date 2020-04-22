const sum = a => a + b;

const sum = (a, b) => a + b;

const sum = (...a) => a ;

const sum = (a, b) => {
    //states
    var x = 10;
    return a + b;
}

console.log(sum(5, 15));

var createObj = () => ({ teste: 123 });

console.log(createObj());


// não funciona com arrow function 
function Car() {
    this.foo = 'bar';
}
console.log(new Car());

var obj = {
    showContetxt: function  showContext() {
        console.log(this);

        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000); 
    }, 

    log: function log(value) {
        console.log(value);
    }
    
};

obj.showContetxt();




