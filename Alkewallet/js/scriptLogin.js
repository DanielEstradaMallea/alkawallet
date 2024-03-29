$(document).ready(function () {
    $("#loginForm").submit(function (event) {
        event.preventDefault();
        var username = $("#username").val();
        var password = $("#password").val();

        // Verificar las credenciales
        if (username === "admin" && password === "12345") {
            // Credenciales válidas, redirigir a la pantalla de wallet
            window.location.href = "home.html";
        } else if (username === "" && password === "") {
        } else {
            // Credenciales inválidas, mostrar mensaje de error
            $("#errorMessage").show();
        }
    });

    // Ocultar el mensaje de error cuando se escriba en los campos
    $("#username, #password").on("input", function () {
        if ($("#username").val() !== "" || $("#password").val() !== "") {
            $("#errorMessage").hide();
        }
    });
});