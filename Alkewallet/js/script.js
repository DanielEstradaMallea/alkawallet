$(document).ready(function () {
    // Al cargar la página, se inicializan los movimientos desde el almacenamiento local
    var movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

    // Función para confirmar el depósito
    $("#confirmarDeposito").click(function () {
        var saldoActual = parseFloat($("#saldo").text());
        var deposito = parseFloat($("#montoDeposito").val());
        if (!isNaN(deposito) && deposito > 0) {
            var nuevoSaldo = saldoActual + deposito;
            $("#saldo").text(nuevoSaldo.toFixed(2));
            guardarMovimiento("Depósito", new Date().toISOString(), deposito);
            // Animación de incremento de saldo
            $("#saldo").animate(
                { num: nuevoSaldo.toFixed(2) },
                {
                    duration: 1000,
                    step: function (num) {
                        this.innerHTML = num.toFixed(2);
                    },
                }
            );
            // Actualizar la tabla de movimientos
            actualizarTablaMovimientos();
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
            var nuevoSaldo = saldoActual - transferencia;
            $("#saldo").text(nuevoSaldo.toFixed(2));
            guardarMovimiento("Transferencia", new Date().toISOString(), -transferencia);
            // Animación de decremento de saldo
            $("#saldo").animate(
                { num: nuevoSaldo.toFixed(2) },
                {
                    duration: 1000,
                    step: function (num) {
                        this.innerHTML = num.toFixed(2);
                    },
                }
            );
            // Actualizar la tabla de movimientos
            actualizarTablaMovimientos();
            // Cerrar el modal
            $("#modalTransferir").modal("hide");
        } else {
            alert("Ingrese una cantidad válida o saldo insuficiente.");
        }
    });

    // Función para guardar un movimiento en el almacenamiento local
    function guardarMovimiento(tipo, fecha, monto) {
        movimientos.push({ tipo: tipo, fecha: fecha, monto: monto });
        localStorage.setItem("movimientos", JSON.stringify(movimientos));
    }

    // Función para actualizar la tabla de movimientos
  

    function actualizarTablaMovimientos() {
        var tbody = $("#movimientos-body");
        tbody.empty(); // Limpiar el contenido anterior de la tabla
        movimientos.forEach(function (movimiento) {
            var row = $("<tr>");
            var iconClass = movimiento.tipo === "Depósito" ? "text-success fas fa-arrow-down" : "text-secondary fas fa-arrow-up";
            var icon = $("<i>").addClass("arrow-icon rotated-icon " + iconClass);
            $("<td>").append(icon).appendTo(row);
            $("<td>").text(movimiento.tipo).appendTo(row);
             // Formatea la fecha como "dd-mm-aaaa"
             var fecha = new Date(movimiento.fecha).toLocaleDateString('es-ES');
             $("<td>").text(fecha).appendTo(row);
            $("<td>").text(movimiento.monto).appendTo(row);
            row.appendTo(tbody);
        });
    }

    // Al cargar la página, se actualiza la tabla de movimientos y el saldo
    actualizarTablaMovimientos();
    $("#saldo").text(calcularSaldoActual());

    // Función para calcular el saldo actual sumando todos los montos de los movimientos
    function calcularSaldoActual() {
        var saldo = 0;
        movimientos.forEach(function (movimiento) {
            saldo += parseFloat(movimiento.monto);
        });
        return saldo.toFixed(2);
    }
});


