const {question, close} = require ('./utils/readline')

// Construa um algoritmo que determine quanto será gasto para abastecer o um carro.
// sabendo-se que o preço da gasolina é de R$ 5,90 e o preço do álcool é de R$ 3,88. 
// O usuário fornecerá os seguintes dados: 
// - Tipo do motor (se é a gasolina ou álcool) 
// - Quantidade de litros que quer abastecer

const calculaPrecoGasolina = (quantosLitros) => {
 const quantoFicaGasolina = 5.90 * quantosLitros
 return quantoFicaGasolina
}
const calculaPrecoAlcool = (quantosLitros) => {
    const quantoFicaAlcool = 3.88 * quantosLitros
 return quantoFicaAlcool
}

const start = async () => {
    try {
        const tipoDoMotor = await question("você escolhe gasolina ou alcool?: ")
        
        const quantosLitros = await question(`quantos litros de ${tipoDoMotor} você quer?: `)

        if (tipoDoMotor == "gasolina") {
            return ( 
                console.log(`${quantosLitros}L de gasolina ficam por R$${calculaPrecoGasolina(quantosLitros)}`)
            )
        }
        if (tipoDoMotor == "alcool") {
             return ( 
                 console.log(`${quantosLitros}L de alcool ficam por R$${calculaPrecoAlcool(quantosLitros)}`)
            )
            
        } else {
            return (
                console.log("a opção que você pediu não tem em nosso posto :( tente no posto ipiranga :D")
            )
        }

    } catch (erro) {
        console.log("algo deu errado, tente novamente")
        console.error(erro)
    } finally {
        close()
    }
  
}

start();