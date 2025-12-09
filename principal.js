function muestra_oculta(id) {
    let contenido = document.getElementById(id);

    if (!contenido) {
        console.warn("No se encontró el elemento con id:", id);
        return;
    }

    // Alternar visibilidad
    if (contenido.style.display === "none" || contenido.style.display === "") {
        contenido.style.display = "block";
    } else {
        contenido.style.display = "none";
    }
}
