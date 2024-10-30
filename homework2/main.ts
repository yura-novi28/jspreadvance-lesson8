let num: unknown = prompt();
let test = Number(num);
console.log(!isNaN(test)? test === 0? 'Число 0': test%2 === 0? 'Число парне': 'Число не парне' :'Це не число!')