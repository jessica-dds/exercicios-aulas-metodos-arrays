
let numero = 10

const contador = setInterval(function () {
    console.log(numero)
    numero--
    if (numero === 0) {
        console.log('Booooommmm!')
        clearInterval(contador)
    }
}, 1000)