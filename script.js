document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ELEMENTOS
    // =========================

    const abrirCarta = document.getElementById("abrirCarta");
    const inicio = document.getElementById("inicio");
    const carta = document.getElementById("carta");

    const musica = document.getElementById("musica");

    const mostrarVideo = document.getElementById("mostrarVideo");
    const videoContainer = document.getElementById("videoContainer");
    const videoCarta = document.getElementById("videoCarta");


    // =========================
    // ABRIR CARTA
    // =========================

    if (abrirCarta) {

        abrirCarta.addEventListener("click", function () {

            console.log("💛 Abriendo carta...");

            // Ocultar portada
            inicio.style.display = "none";

            // Mostrar carta
            carta.classList.remove("oculto");

            // Permitir scroll
            document.body.style.overflowY = "auto";

            // Ir al inicio de la carta
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant"
            });

            // Iniciar música
            musica.volume = 0.35;

            musica.play().catch(function (error) {

                console.log(
                    "La música necesita iniciarse manualmente:",
                    error
                );

            });

        });

    }


    // =========================
    // MOSTRAR VIDEO
    // =========================

    if (mostrarVideo) {

        mostrarVideo.addEventListener("click", function () {

            console.log("🎥 Mostrando video...");

            // Mostrar contenedor
            videoContainer.classList.remove("oculto");

            // Ocultar botón
            mostrarVideo.style.display = "none";

            // Pausar música
            musica.pause();

            // Reproducir video
            videoCarta.play().catch(function (error) {

                console.log(
                    "El video necesita iniciarse manualmente:",
                    error
                );

            });

            // Desplazarse hacia el video
            setTimeout(function () {

                videoContainer.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 200);

        });

    }


    // =========================
    // VIDEO COMIENZA
    // =========================

    if (videoCarta) {

        videoCarta.addEventListener("play", function () {

            musica.pause();

        });


        // =========================
        // VIDEO TERMINA
        // =========================

        videoCarta.addEventListener("ended", function () {

            console.log("🎬 Video terminado");

            // Volver a reproducir música
            musica.play().catch(function (error) {

                console.log(
                    "La música necesita iniciarse manualmente:",
                    error
                );

            });

        });

    }

});