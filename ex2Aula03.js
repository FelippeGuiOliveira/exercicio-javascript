// ----------- 2 ------------ //

let nome, idade, bairro, num1, num2

nome = prompt('Qual seu nome? ').toUpperCase()
idade = parseInt(prompt('Qual sua idade? '))
bairro = prompt('Digite seu bairro: ')
num1 = Number(prompt('digite um numero: '))
num2 = Number(prompt('digite outro numero: '))

alert(`A soma dos numeros escolhidos por você é igual a ${num1 + num2}`)

// ----------- 5 ------------ //

let nota1 = Number(prompt('Primeira nota: '))
let nota2 = Number(prompt('Segunda nota: '))
// media minima == 6
let media = ((nota1 + nota2) / 2)
alert(`${media ? `Parabens voce passou com media ${media}` : `Que pena infelizmente ${media} não é o suficiente para passar`}`)