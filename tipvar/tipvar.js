var test = 'example';

(() => {
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        var test = 'example if';
        console.log(`Valor dentro do if ${test}`);
    }

    console.log(`Valor após a execução do if ${test}`);
})();

(() =>{
    let test = 'valor função';
    console.log(`Valor dentro da função ${test}`)

    if (true) {
        let test = 'valor if';
        console.log(`Valor dentro do if ${test}`);
    }
    
    console.log(`Valor após a execução do if ${test}`)
})();