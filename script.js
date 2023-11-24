function generarAmigoSecreto() {
    var nombreUsuario = document.getElementById("nombreInput").value;
    var mensaje = document.getElementById("mensaje");

    switch (nombreUsuario) {
        case "Saul":
            mensaje.textContent = "Tu amigo secreto es: Yire";
            break;
        case "Angela":
            mensaje.textContent = "Tu amigo secreto es: Saul";
            break;
        case "Yire":
            mensaje.textContent = "Tu amigo secreto es: Angela";
            break;
        default:
            mensaje.textContent = "Nombre no reconocido. Inténtalo de nuevo.";
    }
}
