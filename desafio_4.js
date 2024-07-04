
//mesma coisa da 3 ;-;

const {question, close} = require('./utils/readline')

const start = async() => { 
  try {
    const desconto = await question('Quantos % de desconto vc quer?: ')
    const priceProduct = await question(`${desconto}% de desconto! digite o preco do produto: `)
  } catch {
    
  } finally{
    close()
  }
}

start();