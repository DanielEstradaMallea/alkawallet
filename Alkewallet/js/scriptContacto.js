document.addEventListener("DOMContentLoaded", function() {
    const contactos = [
        { nombre: "Juan Pérez", numeroCuenta: "12345678", banco: "Banco A", correo: "juan@example.com" },
        { nombre: "María Gómez", numeroCuenta: "23456789", banco: "Banco B", correo: "maria@example.com" },
        { nombre: "Carlos López", numeroCuenta: "34567890", banco: "Banco C", correo: "carlos@example.com" },
        { nombre: "Ana Martínez", numeroCuenta: "45678901", banco: "Banco D", correo: "ana@example.com" },
        { nombre: "Laura Sánchez", numeroCuenta: "56789012", banco: "Banco E", correo: "laura@example.com" },
        { nombre: "Pedro Rodríguez", numeroCuenta: "67890123", banco: "Banco F", correo: "pedro@example.com" },
        { nombre: "Sofía García", numeroCuenta: "78901234", banco: "Banco G", correo: "sofia@example.com" },
        { nombre: "Daniel Jiménez", numeroCuenta: "89012345", banco: "Banco H", correo: "daniel@example.com" }
    ];

    const tbody = document.querySelector("#contactosTable tbody");

    // Generar filas de la tabla con los datos de los contactos
    contactos.forEach(contacto => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${contacto.nombre}</td>
            <td>${contacto.numeroCuenta}</td>
            <td>${contacto.banco}</td>
            <td>${contacto.correo}</td>
            <td><button class="btn btn-primary"><i class="fas fa-edit"></i></button></td>
            <td><button class="btn btn-danger"><i class="fas fa-trash-alt"></i></button></td>
        `;
        tbody.appendChild(tr);
    });
});