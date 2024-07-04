const {question , close } = require('./utils/readline');
// Desafio 0: Olá mundo... de novo?
// Missão: Seja bem vindo a Jornada Salafrária (JS)! Você não me é estranha, certo? Vamos começar com um desafio simples para relembrar os velhos tempos. Me diga o seu nome!

// Instruções: 
// 1. Solicite ao usuário o sua idade. 
// 2. Exiba o ano em que ele nasceu.

const start = async () => {
  try {
    const idade = await question('Quantos anos você faz esse ano?: ')
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const anoQueOUserNasceu = anoAtual - idade

    console.log(`Você provavelmente nasceu em: ${anoQueOUserNasceu}`)

  } catch {
    console.error('burro.')
  } finally {
    close()
  }
}


start();