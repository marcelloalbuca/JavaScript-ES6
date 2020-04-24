//ES7 PROMISSES
//Async / Await  //assincrona

const asyncTimer = () => 
    new Promise((resolver, reject) => {
        setTimeout(() => {
            resolver(12345);
        }, 1000);
    });

const sympleFunc = async () => {

    //Promise.all
    const data = await Promise.all([
        asyncTimer(),
        fetch('/data.json').then(resStream => resStream.json())
    ]);

    return data;

    /*
        //await esperar promise resolver     
    const data = await asyncTimer();
    console.log(data);
    const dataJSON = await fetch('/data.json')
    .then(resStream => 
        resStream.json()
    )
        return dataJSON;
    //throw new Error ('Oh no!');
    //return  1234;
*/
};

sympleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });


//obter dados json
fetch('http://localhost:8080/data.json')
    .then(responseStream => {
    if (responseStream.status === 200) {
        return responseStream.json();
    } else {
        throw new Error('Request error');
    }
    })
    .then( data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });

/*
    //enviar dados json
fetch('http://localhost:8080/data.json', {
    method: 'post',
    body:---
})
.then(responseStream => {
if (responseStream.status === 200) {
    return responseStream.json();
} else {
    throw new Error('Request error');
}
})
.then( data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});


*/










