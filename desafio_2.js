const {question, close} = require ('./utils/readline')

const start = async () => {
  try {
    const compri = parseFloat(await question('Qual o comprimento da sua sala? ' ))
    const larg = parseFloat(await question('Qual a largura da sua sala? ' ))
    const area = compri * larg 
    const perimetro = 2 * (compri + larg) 
    const response = `A area da sua sala é ${area.toFixed(2)} m² e o perímetro é de ${perimetro}`
    console.log(response)
  } catch {
    console.log('n sei oq c fez mas c foi burro')
  } finally{
    close()
  }
}

start()