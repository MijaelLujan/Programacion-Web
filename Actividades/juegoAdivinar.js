/*
Nombres de los Integrantes:
    - Mijael Lujan Gandarillas
    - Jherlan Marcelo Calero Sardan
    - Diego Hans Mirabal Lopez Videla
*/



let limiteInferior;
let limiteSuperior;
let numeroSecreto;
let cantIntentos;
let scoreGanados = 0;
let scorePerdidos = 0;
let juegoActivo = false;

function generarNumero(min, max){
  return Math.random() * (max - min) + min;
}

function nuevoJuego(min, max, intentos){
  if (min >= max){
    console.log("Límites inválidos");
    return;
  }

  limiteInferior = min;
  limiteSuperior = max;
  numeroSecreto = generarNumero(min, max);
  cantIntentos = intentos;
  juegoActivo = true;

  console.log(`Juego iniciado. Adivina un número entre ${min} y ${max}`);
  console.log(`Tienes ${cantIntentos} intentos`);
}

function adivinar(num){
  if(!juegoActivo){
    console.log("No hay juego activo. Usa iniciarJuego()");
    return;
  }

  if(isNaN(num)){
    console.log("Ingresa un número válido");
    return;
  }

  if(num === numeroSecreto){
    console.log("¡Ganaste!");
    scoreGanados++;
    juegoActivo = false;
    score();
    return;
  }

  cantIntentos--;

  if(num < numeroSecreto){
    console.log("El número es mayor");
  } else {
    console.log("El número es menor");
  }

  if(cantIntentos === 0){
    console.log(`Perdiste. El número era ${numeroSecreto}`);
    scorePerdidos++;
    juegoActivo = false;
    score();
  } else {
    console.log(`Intentos restantes: ${cantIntentos}`);
  }
}

function score(){
  console.log("Ganados:", scoreGanados);
  console.log("Perdidos:", scorePerdidos);
  let totalPartidas = scoreGanados + scorePerdidos;
  console.log(`Jugaste un total de: ${totalPartidas} veces`)
}