window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const contenido = document.getElementById("contenido");

    // Mantén el loader visible durante 3 segundos
    setTimeout(() => {
        loader.style.opacity = "0"; // Inicia el desvanecimiento

        // Después de 1 segundo (duración de la transición), oculta completamente el loader
        setTimeout(() => {
            loader.style.display = "none"; // Oculta completamente el loader
            contenido.style.display = "block"; // Muestra el contenido principal
        }, 1000); // 1000 ms = 1 segundo (duración del desvanecimiento)
    }, 3000); // 3000 ms = 3 segundos (tiempo antes de desvanecerse)
});


