const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

const splittedText = 'Texto'.split('x');
console.log(`\nArray com posições separadas pelo delimitador:`, splittedText);

const replaceText = 'Texto'.replace('Text', 'txeT');
console.log(`\nSubstituição de valor:`, replaceText);

const lastChar = 'Texto'.slice(-1);
console.log(`\nÚltima letra de uma string:`, lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log(`\nValor da string da primeira letra menos a última:`, allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log(`\nValor da string da segunda letra até a segunda:`, secondToEnd);

const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log(`\nAs duas letras primeiras letras são:`, twoCharsBeforeFirstPos);