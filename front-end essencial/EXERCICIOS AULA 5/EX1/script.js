function validarFormulario() {
    var nome = document.getElementById("Nome").value;
    var email = document.getElementById("Email").value;
    var texto = document.getElementById("Texto").value;

    if (nome === "") {
        alert("Por favor, preencha o campo Nome.");
        return false;
    }

    if (email === "") {
        alert("Por favor, preencha o campo Email.");
        return false;
    }

    if (texto === "") {
        alert("Por favor, preencha o campo Texto.");
        return false;
    }

    return true;
}
