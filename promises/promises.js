const myPromise = new Promise((resolved, reject) => {
    //
});

const doSomeThingPromise = () => 
    new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () => 
    new Promise((resolve, reject) => {
       // throw new Error('Something wrong');
    setTimeout(function() {
        resolve('Second data');
    }, 1000);
});

//console.log(doSomeThingPromise);

doSomeThingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log(error));

//peding
//fulfilled
//rejected

//2 functions ao mesmo tempo 
Promise.all([doSomeThingPromise(), doOtherThingPromise()])
.then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
});

//qual executar primeiro
Promise.race([doSomeThingPromise(), doOtherThingPromise()])
.then(data => {
    console.log(data)
});