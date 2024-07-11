// //construa um algoritmo que determine quantos litros serão abastecidos com base no 
// //valor que o usuário pagará.
// //sabendo-se que o preço da gasolina é de R$ 5,90 e o preço do álcool é de R$ 3,88. 
// //O usuário fornecerá os seguintes dados: 
// //•⁠  ⁠Tipo do motor (se é a gasolina ou álcool) 
// //•⁠  ⁠Quantos reais do ${fuelType} ele quer



// Missão: Determine quanto será gasto para abastecer um carro ou quantos litros serão abastecidos com base no valor que o usuário deseja pagar. O usuário pode escolher entre fornecer a quantidade de litros ou o valor em reais para abastecer.
// Instruções:

// 1. Solicite ao usuário que escolha se quer fornecer o valor em reais ou a quantidade de litros.
// 2. Solicite ao usuário o tipo de motor (gasolina ou álcool).

// 3. Se o usuário escolheu fornecer o valor em reais:
//     - Solicite ao usuário o valor em reais.
//     - Calcule a quantidade de litros que serão abastecidos.
//     - Exiba a quantidade de litros.

// 4. Se o usuário escolheu fornecer a quantidade de litros:
//     - Solicite ao usuário a quantidade de litros.
//     - Calcule o valor total a ser pago.
//     - Exiba o valor total.

// Preços dos Combustíveis:
// Gasolina: R$ 5,90 por litro.
// Álcool: R$ 3,88 por litro.


const {question, close} = require (`../utils/readline`)

//utils
const {calculaReaisPorGasolina } = require("./utils/ReaisGasolina")
const {calculaReaisPorAlcool } = require("./utils/ReaisAlcool")
const {calculaLitroGasolina} = require("./utils/LitroGasolina")
const {calculaLitroAlcool} = require("./utils/LitroAlcool")


const start = async() => {
    try {
        const formaDeMedir = await question("opa bom dia! escolha se quer fornecer o valor em reais(R) ou a quantidade de litros(L): ")
        const fuelType = await question("certo, e você quer alcool(1) ou gasolina(2)?: ")


        if (formaDeMedir.toLowerCase() == 'r') {

            if (fuelType == '2') {
                    const howMuch = await question('certo, quantos reais de gasolina você precisa?: ')
                    console.log (`${howMuch} reais de gasolina ficam ${calculaReaisPorGasolina(howMuch)} litros`)
            }

            if (fuelType == '1') {
                const howMuch = await question('certo, quantos reais de alcool você precisa?: ')
                    console.log (`${howMuch} reais de alcool ficam ${calculaReaisPorAlcool(howMuch)} litros`)
            }
           
        }  if (formaDeMedir.toLowerCase() == 'l') {

            if (fuelType == '2') {
                const howMuch = await question('certo, quantos litros de gasolina você precisa?: ')
                console.log (`${howMuch}L de gasolina ficam ${calculaLitroGasolina(howMuch)} reais`)
             }

            if (fuelType == '1') {
                const howMuch = await question('certo, quantos litros de alcool você precisa?: ')
                    console.log (`${howMuch}L de alcool ficam ${calculaLitroAlcool(howMuch)} reais`)
            }
        } 

    } catch (error) {
        console.error(error)

    } finally{
        close();
    }

}

start();