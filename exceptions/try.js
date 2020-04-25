class CustomError extends Error {
    constructor({menssagem, data}) {
        super(menssagem);
        this.data = data;
    }
}

try {
    //console.log(name);
    const name = 'Marcello';
    console.log(name);
    
    const myError = new CustomError({
        menssagem: 'Custom menssage',
        data: {
            type: 'Server Error'
        }
    });

    throw myError;
} catch (err) {
    console.log('Erro: ' + err);
    console.log(err.data);
    if (err.data.type === 'Server Error'){
        //...
    }else{
        //...
    }
} finally {
    console.log('Keep going...');
}


