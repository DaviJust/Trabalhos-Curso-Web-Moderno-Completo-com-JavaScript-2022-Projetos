function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 100)
    console.log(`Opcao escolhida foi ${opcao}.` )
} while (opcao != -1)

console.log(`Ate a proxima`)