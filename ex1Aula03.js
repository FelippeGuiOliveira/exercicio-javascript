const frutas = ['banana', 'pitaia', 'laranja', 'maça', 'morango', 'manga', 'pera', 'kiwi'];
let sorted = frutas.sort()
console.log(sorted);

const num = [-2, 40, 16, 111, 33, 64];
let arrumado = num.sort((a, b) => a - b)
console.log(arrumado);

console.log("==============================================================================");

// REAL EXERCICIO

// ----------- 1 ------------ //

let num1 = parseInt(8)
let num2 = parseInt(7)
let soma = num1 + num2
console.log(soma);

console.log("==============================================================================");

let nome = 'Pablão da Massa'
console.log(typeof nome);
console.log(nome);

console.log("==============================================================================");

let boolean = true
console.log(typeof boolean);
console.log(boolean);

console.log("==============================================================================");

let PI = 3.1415
console.log(PI);

console.log("==============================================================================");

// ----------- 3 ------------ //

let newName = nome.replace('da Massa', 'de Paula')
console.log(newName);

console.log("==============================================================================");

// ----------- 4 ------------ //

let preco = Number(3000)
let desconto = Number(0.2)
let precoDesconto = preco - (preco * desconto)
console.log(precoDesconto);

console.log("==============================================================================");

// ----------- 6 ------------ //

let jogos = ['minecraft', 'hollow knight', 'osu', 'forza horizon', 'the spike']
console.log(jogos[1].toUpperCase());

console.log("==============================================================================");

// ----------- 7 ------------ //

let nomeCompleto = 'Guilherme Felippe'
let nomeSeparado = nomeCompleto.split(" ")
console.log(`Meu sobrenome é ${nomeSeparado[1]}, ele vem da parte italiana da familia da minha mae`);