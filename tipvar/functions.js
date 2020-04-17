function fn() {
    return 'Code here';
}

const arrowFn = () => 'Code Here';
const arrowFn2 = () => {
    //mais de uma expressão
    return 'Code here';
}

fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//receber e retornar funções
const controlFnExec = fnParam => allowed => {
    if(allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); //executa 
handleFnExecution();  //não executa

//controlfnExec como função

function controlFnExec(fnParam) {
    return function(allowed) {
        if (allowed){
            fnParam;
        }
    }
}

