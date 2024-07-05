const { question, close } = require('./utils/readline');

const start = async () => {
  try {
    const comprimento = await question('Qual o comprimento da sua sala? ');
    const largura = await question('Qual a largura da sua sala? ');
    const area = comprimento * largura;
    const response = `A area da sua sala é ${area.toFixed(2)} m²`;
    console.log(response);

  } catch {
    console.log('escreve direito animal')
  } finally {
    close()
  }
}

start();