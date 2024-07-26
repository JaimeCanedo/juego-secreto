let numeroSecreto= 0;
let intentos= 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Has acertado el número secreto en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        //El usuario no acertó
        if (numeroUsuario > numeroSecreto) {
        asignarTextoElemento('p','!El número secreto es menor!');
        } else {
        asignarTextoElemento('p','!El número secreto es mayor!');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    return document.getElementById('valorUsuario').value = '';
}

function generarNumerosAleatorios() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo) +1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumerosAleatorios(10);
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function parametrosIniciales() {
    asignarTextoElemento('h1', '!Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumerosAleatorios(10);
    intentos =1;
}

function reiniciarJuego() {                 
    limpiarCaja();
    parametrosIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

parametrosIniciales();


