function verificarVocal(cadena) {
    return new Promise((resolve, reject) => {

        // Si la cadena está vacía, se ejecuta reject() y manda un mensaje de error, haciendo que se detenga la funcion
        if (!cadena) {
            reject(" Ingresar una cadena.");
            return;
        }

        // Podemos obtener el último carácter de la cadena usando slice(-1)
        const ultimaLetra = cadena.slice(-1);
        const vocales = ['a', 'e', 'i', 'o', 'u',
                         'A', 'E', 'I', 'O', 'U'];

        // Si el último carácter está dentro del arreglo, se ejecuta resolve(), y envia el mensaje de éxito
        // Si no termina en vocal, se ejecuta reject() y envia el mensaje de error
        if (vocales.includes(ultimaLetra)) {
            resolve("La cadena termina en la vocal: " + ultimaLetra);
        } else {
            reject("El caracter no es una vocal");
        }
    });
}
function evaluarCadena() {

    // Obtenemos el valor que escribió el usuario en el input
    const cadena = document.getElementById("cadena").value;
    const resultado = document.getElementById("resultado");
    verificarVocal(cadena)
        // .then() se ejecuta si la promesa se RESUELVE
        .then(respuesta => {
            resultado.style.color = "green";
            resultado.textContent = respuesta;
        })
        // .catch() se ejecuta si la promesa se RECHAZA
        .catch(error => {
            resultado.style.color = "red";
            resultado.textContent = error;
        });
}
