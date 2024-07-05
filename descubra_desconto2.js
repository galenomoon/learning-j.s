const {question, close} = require('./utils/readline')

const descobrirDesc = (precoInicial, precoFinal) => {
  const desconto = 100 - (precoFinal / precoInicial) * 100
  return desconto
}

const start = async() => { 
try{
  const precoInicial = await question('Digite o preço inicial do produto: ')
  const precoFinal = await question('Digite o preço final do produto: ')
  const valorDesc = descobrirDesc(precoInicial, precoFinal)
  console.log(`Sabendo que o valor era R$ ${precoInicial} e agora esta R$ ${precoFinal}, o desconto foi de ${valorDesc}%`)
  
} catch {
  console.log('ops...algo deu errado')
} finally{
    close()
}

}

start();