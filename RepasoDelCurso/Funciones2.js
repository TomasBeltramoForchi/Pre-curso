function cuidadoconElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
}

function otraFuncion() {
    return (
        "El nombre retornado por la funcion 'cuidadoConElConsolelog' es: " +
        cuidadoconElConsoleLog('Camilo')
    );
}

function cuidadoConElReturn(nombre) {
    return nombre;
    console.log(nombre);
}