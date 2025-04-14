//Exercício 1:

// let variavel;
// console.log(variavel)

// let variavel2 = null;
// console.log(variavel2)

// let variavel3 = 40;
// console.log(variavel3)
// //Exercício 2:

// const valor = 1;
// const valor2 = 5;

// console.log(valor != valor2)
// console.log(valor == valor2)
// console.log(valor >= valor2)
//Exercício 3:
// let peso = parseFloat(prompt("Qual seu peso?"));
// let altura = parseFloat(prompt("Qual sua altura?"));

// let imc = peso / (altura * altura);
// let faixa = "";

// if (imc < 18.5) {
//     faixa = "baixo";
// } else if (imc >= 18.5 && imc <= 24.9) {
//     faixa = "ideal";
// } else {
//     faixa = "alto";
// }

// switch (faixa) {
//     case "baixo":
//         console.log("Abaixo do peso.");
//         break;
//     case "ideal":
//         console.log("Peso ideal.");
//         break;
//     case "alto":
//         console.log("Acima do peso.");
//         break;
// }

//Exercício 4:
// let exclamacao = "!"
// for(let exclamacao = 0; exclamacao <= 50; exclamacao ++){
//     console.log("!", exclamacao)
// }

//Exercício 5:

// let senha = 1234
// let senhacerta = parseInt(prompt("Digite a senha de admin: "))
// if(senhacerta == senha)
//     alert("login realizado com sucesso!")
//Exercício 6:

// let nota1 = 6.5
// let nota2 = 7
// let nota3 = 5.4
// let nota4 = 5.6
// let nota5 = 8.9
// let nota6 = 0
// let nota7 = 4.2
// let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7
// let minima = media >= 6 ? "Passou": "Não passou";
// console.log(minima);
// if (media >= 6){
//     alert("Você passou!")
// }
// else{
//     alert("Você não passou.")
// }

//Exercício 7:
const nome = "Henrique";
const idade = 19;
const curso = "Engenharia de software";
const ano = 2025;

const dadosEstudanteDiv = document.getElementById("dadosEstudante");

const nomeParagrafo = document.createElement("p");
nomeParagrafo.textContent = `Nome: ${nome}`;

const idadeParagrafo = document.createElement("p");
idadeParagrafo.textContent = `Idade: ${idade}`;

const cursoParagrafo = document.createElement("p");
cursoParagrafo.textContent = `Curso: ${curso}`;

const anoParagrafo = document.createElement("p");
anoParagrafo.textContent = `Ano: ${ano}`;

dadosEstudanteDiv.appendChild(nomeParagrafo);
dadosEstudanteDiv.appendChild(idadeParagrafo);
dadosEstudanteDiv.appendChild(cursoParagrafo);
dadosEstudanteDiv.appendChild(anoParagrafo);
//Exercício 8:

//Exercício 9:
let numString ="3123.223";
console.log(parseFloat(numString))
console.log(typeof numString)
