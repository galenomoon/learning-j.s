// construa um algoritmo que determine quantos litros serão abastecidos com base no 
// valor que o usuário pagará.
// sabendo-se que o preço da gasolina é de R$ 5,90 e o preço do álcool é de R$ 3,88. 
// O usuário fornecerá os seguintes dados: 
// •⁠  ⁠Tipo do motor (se é a gasolina ou álcool) 
// •⁠  ⁠Quantos reais do ${fuelType} ele quer

const {question, close} = require (`../utils/readline`)

//utils
const {calculaReaisPorGasolina } = require("./utils/litrosGasolina")
const { calculaReaisPorAlcool } = require("./utils/litrosAlcool")


const start = async() => {
    try {
        const fuelType = await question("opa bom dia! gasolina ou alcool?: ")
        const howMuch = await question(`otimo, e de quantos reais de ${fuelType} você precisa?: `)

        if (fuelType == 'gasolina') {
            return (
                console.log(`${howMuch} reais de gasolina ficam ${calculaReaisPorGasolina(howMuch)} litros`)
            )
            
        }  if (fuelType == 'alcool') {
            return (
                console.log(`${howMuch} reais de alcool ficam ${calculaReaisPorAlcool(howMuch)} litros`)
            )
            
        }  else {
            return console.log("não temos essa opção")
        }


    } catch (error) {
        console.error(error)

    } finally{
        close();
    }

}

start();