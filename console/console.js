//Console

console.log('Black Text');
console.warn('Yellow text with alert');
console.error('Red error Text');

//console.trace();

console.group('My group');
console.log('Info inside group');
console.log('More info inside group');
console.groupEnd('My group');

console.time('Log time');
setTimeout(() => {
    console.timeEnd('Log time');
}, 2000);

console.table(['Marcello', 'Albuquerque']);

console.log('%c style log', 'color: blue; font-size: 40px');








