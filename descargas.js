
// Evitar la copia de texto
document.addEventListener('copy', function(e) {
    e.preventDefault();
    //alert("La copia de texto está deshabilitada.");
});

// Evitar el clic derecho (context menu)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    //alert("Las descargas de imágenes están deshabilitadas.");
});

// Evitar el uso de teclas comunes de descarga
document.addEventListener('keydown', function(e) {
    // Evita Ctrl + S (Guardar página)
    if ((e.ctrlKey || e.metaKey) && (e.key === 's')) {
        e.preventDefault();
       // alert("La función de guardar está deshabilitada.");
    }
    // Evita Ctrl + U (Ver código fuente)
    if ((e.ctrlKey || e.metaKey) && (e.key === 'u')) {
        e.preventDefault();
       // alert("La función de ver código fuente está deshabilitada.");
    }
});

// Evitar que se arrastre la imagen
document.querySelectorAll('.no-descarga').forEach(function(img) {
    img.addEventListener('dragstart', function(e) {
        e.preventDefault();
       // alert("No puedes descargar esta imagen.");
    });
});


