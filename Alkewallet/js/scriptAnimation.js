
var animation = bodymovin.loadAnimation({
    container: document.getElementById('miAnimacion'),
    path: './animation/card-wallp.json', // Ruta al archivo JSON de la animación
    renderer: 'svg', // Puedes elegir 'canvas' o 'html' según tus necesidades
    loop: true, // Opcional: Repetir la animación
    autoplay: true // Opcional: Iniciar automáticamente
});

    