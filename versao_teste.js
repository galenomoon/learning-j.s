const { question, close } = require('./utils/readline');

const start = async () => { //criando function assincrona
  try {
    const nome = await question('digite seu nome: ')
    const text = `Bem vindo ${nome.toUpperCase()} `;
    console.log(text);
  } finally {
    close()
  }

}

start();  //executando a fuction


const {question, close} = require (`./utils/readline`)

const start = async() => {
    try {
        
    } catch (error) {
        console.error(erro)
    } finally{
        close();
    }

}

start();