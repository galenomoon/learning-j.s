
const calculaReaisPorAlcool = (howMuch) => { // verbos ou acoes
    const litrosAlcool = howMuch / 3.88
    return litrosAlcool.toFixed(2)
}
module.exports = { calculaReaisPorAlcool }