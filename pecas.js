//var -> o valor pode ser modificado a qualquer momento e em qualquer ponto do sistema (fora do escopo)
// const -> o valor nao pode ser alterado
// let -> o valor pode ser  modificado a qualquer momento porem somente dentro do escopo

// = receber / atribuir valor

// == comparar se são iguais
// === compara se são estritamente iguais
// != compara se são diferentes
// 1 < 0 um é menor que zero
// 1 > 0 um é maior que zero
// 1 <= 5 um é menor ou igual a cinco
// 1 >= 5 um é maior ou igual a cinco

// x <= 5 reprovado
// x > 5 aprovado x >= 6


// if ("5" === 5) {
//     console.log("sim")
// } else {
//     console.log("não")
// }

// var numero = 2

// switch (numero) {  
//     case 2:
//         console.log("É 2.")
//         break;

//     case 1:
//         console.log("É 1.")
//         break;

//     default:
//         console.log("não sei qual é o numero")
//         break;
// }

// var numero = 2

// if (numero == 2) {
//     console.log("É 2.")
// }else if (numero == 1) {
//     console.log("É 1.")
// }else {
//     console.log("não sei qual é o numero")
// }


let pesoPeca = 300 //peso deve ser maior que 100
let nomePeca = "disco" //tamanho do nome deve ser maior que 2 caracteres
let quantidadePecas = 5 //quantidade de peças não pode ser maior que 10

if (quantidadePecas < 10) {
    console.log("A lista de peças ainda tem espaço, a peça pode ser cadastrada")

    if (nomePeca.length > 2 ) {
        console.log("Nome OK.")

        if (pesoPeca >= 100) {
            console.log("Peça cadastrada com sucesso.")

        }else{
            console.log("Peso inferior a 100g, a peça não pode ser cadastrada.")
        }

    }else {
        console.log("O nome da peça tem menos de 3 caracteres, e não pode ser cadastrado.")
    }

}else {
    console.log("A lista de peças já está completa, não é possível cadastrar mais peças.")
}