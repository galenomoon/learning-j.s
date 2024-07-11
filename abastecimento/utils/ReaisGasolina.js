const calculaReaisPorGasolina = (howMuch) => {
    const litrosGasolina = howMuch / 5.90
    return litrosGasolina.toFixed(2) 
}

module.exports = { calculaReaisPorGasolina }