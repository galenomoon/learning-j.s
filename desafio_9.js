const { question, close } = require('./utils/readline')

// pedir o valor em real
// dar 3 opcoes, 1 = converter p dolar, 2 = converter em Libras, 3 = converter em euros



const convertDolar = (valorReal) => {
  const valorEmDolar = valorReal * 0.18
  return valorEmDolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}
const convertLibras = (valorReal) => {
  const valorEmLibras = valorReal * 0.14
  return valorEmLibras.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })
}
const convertEuro = (valorReal) => {
  const valorEmEuro = valorReal * 0.17
  return valorEmEuro.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
}

const start = async () => {
  try {
    const valorReal = await question('Digite o seu valor em Reais: ')
    console.log("1 para converter em DOLAR")
    console.log("2 para converter em LIBRAS")
    console.log("3 para converter em EURO")
    const converterEm = await question(`Selecione algumas das opções acima para converter ${parseFloat(valorReal).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}: `)

    if (converterEm == 1) {
      return (
        console.log(`Seu valor de R$${valorReal} convertido em DOLAR fica de ${convertDolar(valorReal)} dolares`)
      )
    }

    if (converterEm == 2) {
      return (
        console.log(`Seu valor de R$${valorReal} convertido em LIBRAS fica de ${convertLibras(valorReal)} libras`)
      )
    }
    if (converterEm == 3) {
      return (
        console.log(`Seu valor de R$${valorReal} convertido em EURO fica de ${convertEuro(valorReal)} euros`)
      )
    }
    else {
      return (
        console.log('O numero que voce digitou nao esta nas opcoes, tente novamente seguindo os passos corretamente')
      )
    }

  } catch {
    console.log('ocorreu um erro, tente novamente')

  } finally {
    close()
  }

}

start();