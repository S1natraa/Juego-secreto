let numeroSecreto = 0;

let intentos = 0;

let numerosAleatorios = [];

let numeroMaximo = 10;

condicionesIniciales();

function numeroAleatorio(){

	let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(numerosAleatorios);
    if(numerosAleatorios.length == numeroMaximo){
        asignarTexto("p","Se ha alcanzado el numero maximo de juegos nuevos");
        document.getElementById("intentar").setAttribute("disabled","true");
    }
    else {
        if(numerosAleatorios.includes(numeroGenerado)){
            return numeroAleatorio();
        }
        else{
            numerosAleatorios.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function asignarTexto (etiqueta,texto) {
	let elementoHTML = document.querySelector(etiqueta);
	elementoHTML.innerHTML = texto;
}

function limpiarInput (){
    document.querySelector("#numeroUsuario").value = "";
}

function intentoUsuario() {
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
    if(isNaN(numeroUsuario)){
        asignarTexto("p","Usted no ha ingresado ningun numero");
    }
    else{
        if (numeroSecreto == numeroUsuario){
            asignarTexto("p",`Acertaste en ${intentos} ${intentos ==1 ? "intento" : "intentos"}`);
            document.getElementById("reiniciar").removeAttribute("disabled");
        }
        else{
            if(numeroUsuario > numeroSecreto) {
                asignarTexto("p",`El numero secreto es menor que ${numeroUsuario}`);
            }
            else{
                asignarTexto("p",`El numero secreto es mayor que ${numeroUsuario}`);
            }
        }
        intentos ++;
    }
    
    limpiarInput();
    return;
}

function reiniciarJuego() {
    limpiarInput();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled","true");
}

function condicionesIniciales () {

    asignarTexto("h1","Juego del numero secreto");

    asignarTexto("p",`Ingrese un numero entre 1-${numeroMaximo}`);

    numeroSecreto = numeroAleatorio();

    intentos = 1;

}

