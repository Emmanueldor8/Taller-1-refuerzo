let baseDatos1 = [
    "Canada", "EUA", "Mexico", "Ecuador",
    "Brazil", "Argentina", "Uruguay"
];

let baseDatos2 = [
    "Portugal", "Brazil", "Panama", "Costa Rica", "México",
    "Alemania", "Argentina", "España", "Inglaterra", "Colombia", "Francia"
];

function encontrado(pais) {
    let resultado = document.getElementById("resultado");
    resultado.style.color = "green";
    resultado.textContent = "Pais encontrado: " + pais;
}

function busquedaBaseDatos2(pais, callback) {

    let paisNormalizado = pais.toLowerCase();

    let encontradoEnBD2 = baseDatos2.find(p =>
        p.toLowerCase() === paisNormalizado
    );

    if (encontradoEnBD2) {
        callback(encontradoEnBD2);
    } else {
        document.getElementById("resultado").style.color = "red";
        document.getElementById("resultado").textContent = "Dato no encontrado";
    }
}

function busquedaBaseDatos1(pais, callbackEncontrado, callbackBusqueda2) {

    let paisNormalizado = pais.toLowerCase();

    let encontradoEnBD1 = baseDatos1.find(p =>
        p.toLowerCase() === paisNormalizado
    );

    if (encontradoEnBD1) {
        callbackEncontrado(encontradoEnBD1);
    } else {
        callbackBusqueda2(pais, callbackEncontrado);
    }
}

function iniciarBusqueda() {

    let pais = document.getElementById("pais").value.trim();

    if (pais === "") {
        alert("Ingrese un país");
        return;
    }

    document.getElementById("resultado").textContent = "";

    busquedaBaseDatos1(
        pais,
        encontrado,
        busquedaBaseDatos2
    );
}
