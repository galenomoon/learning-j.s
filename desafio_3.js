const {question, close} = require('./utils/readline')

const aplicarDesconto = (valorTotalDoProduto, valorDoDesconto) => {
    const desconto = parseFloat(valorTotalDoProduto) * parseFloat(valorDoDesconto/100)
    const valorFinal = parseFloat(valorTotalDoProduto) - parseFloat(desconto) 
    return valorFinal
}

const start = async() => {
  try {
    const desconto = await question('Quantos % de desconto vc quer?: ')
    const priceProduct = await question(`${desconto}% de desconto! digite o preco do produto: `)
    const valorComDesconto = aplicarDesconto(priceProduct, desconto)
    console.log(`no fim o produto custa R$ ${valorComDesconto}! `)  
  } catch {
    console.log('ops...deu algo errado')
  } finally{
    close()
  }
}

start();