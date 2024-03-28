$(document).ready(function () {
    // Función para confirmar el depósito
    $("#confirmarDeposito").click(function () {
        var saldoActual = parseFloat($("#saldo").text());
        var deposito = parseFloat($("#montoDeposito").val());
        if (!isNaN(deposito) && deposito > 0) {
            $("#saldo").text((saldoActual + deposito).toFixed(2));
            // Animación de incremento de saldo
            $("#saldo").animate(
                { num: (saldoActual + deposito).toFixed(2) },
                {
                    duration: 1000,
                    step: function (num) {
                        this.innerHTML = num.toFixed(2);
                    },
                }
            );
            // Cerrar el modal
            $("#modalDepositar").modal("hide");
        } else {
            alert("Ingrese una cantidad válida.");
        }
    });

    // Función para confirmar la transferencia
    $("#confirmarTransferencia").click(function () {
        var saldoActual = parseFloat($("#saldo").text());
        var transferencia = parseFloat($("#montoTransferencia").val());
        if (
            !isNaN(transferencia) &&
            transferencia > 0 &&
            transferencia <= saldoActual
        ) {
            $("#saldo").text((saldoActual - transferencia).toFixed(2));
            // Animación de decremento de saldo
            $("#saldo").animate(
                { num: (saldoActual - transferencia).toFixed(2) },
                {
                    duration: 1000,
                    step: function (num) {
                        this.innerHTML = num.toFixed(2);
                    },
                }
            );
            // Cerrar el modal
            $("#modalTransferir").modal("hide");
        } else {
            alert("Ingrese una cantidad válida o saldo insuficiente.");
        }
    });
});

// Arreglo de datos de ejemplo
const movimientos = [
    { tipo: "Depósito", fecha: "2024-03-29", monto: "$" + 100 },
    { tipo: "Transferencia", fecha: "2024-03-28", monto: "$" + -50 },
    { tipo: "Depósito", fecha: "2024-03-27", monto: "$" + 200 },
];

// Función para llenar la tabla con datos dinámicos
function llenarTabla() {
    const tbody = document.getElementById("movimientos-body");
    tbody.innerHTML = ""; // Limpiar el contenido anterior de la tabla
    movimientos.forEach((movimiento) => {
        const row = document.createElement("tr");
        const tipoColumn = document.createElement("td");
        tipoColumn.textContent = movimiento.tipo;
        row.appendChild(tipoColumn);

        const fechaColumn = document.createElement("td");
        fechaColumn.textContent = movimiento.fecha;
        row.appendChild(fechaColumn);

        const montoColumn = document.createElement("td");
        montoColumn.textContent = movimiento.monto;
        row.appendChild(montoColumn);

        // Agregar icono según el tipo de movimiento
        const iconColumn = document.createElement("td");
        const icon = document.createElement("i");
        icon.classList.add("arrow-icon");
        if (movimiento.tipo === "Depósito") {
            icon.classList.add(
                "text-success",
                "rotated-icon",
                "fas",
                "fa-arrow-down"
            );
        } else {
            icon.classList.add(
                "text-secondary",
                "rotated-icon",
                "fas",
                "fa-arrow-up"
            );
        }
        iconColumn.appendChild(icon);
        row.appendChild(iconColumn);

        tbody.appendChild(row);
    });
}

// Llenar la tabla al cargar la página
llenarTabla();