function method() {
    console.log('method called');
}

var obj = {
    method
};

var obj2 = {
    sum: function sum(a, b) {
        return a + b;
    }
};

//função anonima
var obj2 = {
    sum: function (a, b) {
        return a + b;
    }
};

var obj2 = {
    sum(a, b) {
        return a + b;
    }
};

console.log(obj2.sum(2,5));
obj.method();

var propName = 'teste';

var obj3 = {}

obj3[propName] = 'prop value';

var obj4 = {
    [propName + 'concat']: 'prop value2'
};


console.log(obj4);