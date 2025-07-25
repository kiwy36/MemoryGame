// galeria.js
class Galeria {
    constructor(imagenes) {
        this.imagenes = imagenes;
        this.galeriaContainer = null;
        this.init();
    }

    init() {
        // Crear contenedor principal de la galería
        this.galeriaContainer = document.createElement('div');
        this.galeriaContainer.id = 'galeria-container';
        this.galeriaContainer.className = 'galeria-container';
        
        // Crear título de la galería
        const titulo = document.createElement('h1');
        titulo.textContent = 'Álbum de Imágenes';
        titulo.className = 'galeria-titulo';
        // Crear contenedor de imágenes
        const imagenesContainer = document.createElement('div');
        imagenesContainer.className = 'imagenes-grid';
        // Crear botón de volver
        const botonVolver = document.createElement('button');
        botonVolver.textContent = 'Volver al Menú';
        botonVolver.className = 'boton-volver';
        botonVolver.addEventListener('click', this.ocultarGaleria.bind(this));
        // Construir la estructura
        this.galeriaContainer.appendChild(titulo);
        this.galeriaContainer.appendChild(imagenesContainer);
        this.galeriaContainer.appendChild(botonVolver);
        // Añadir al body
        document.body.appendChild(this.galeriaContainer);
        // Cargar imágenes
        this.cargarImagenes();
    }

    cargarImagenes() {
        const imagenesContainer = this.galeriaContainer.querySelector('.imagenes-grid');
        this.imagenes.forEach((imagen) => {
            const imagenItem = document.createElement('div');
            imagenItem.className = 'imagen-item';
            imagenItem.id = imagen.id;

            const img = document.createElement('img');
            img.src = imagen.src;
            img.alt = imagen.leyenda;
            img.loading = 'lazy';

            const leyenda = document.createElement('h2');
            leyenda.textContent = imagen.leyenda;

            imagenItem.appendChild(img);
            imagenItem.appendChild(leyenda);
            imagenesContainer.appendChild(imagenItem);
        });
    }


    mostrarGaleria() {
        document.getElementById('contenedor-juego').style.display = 'none';
        this.galeriaContainer.style.display = 'block';
    }

    ocultarGaleria() {
        this.galeriaContainer.style.display = 'none';
        document.getElementById('contenedor-juego').style.display = 'block';
    }
    }

// Inicializar la galería cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const imagenesACargar = [
        { id: '01', src: './img/000.jpg', leyenda: 'Lago de Bari' },
        { id: '02', src: './img/001.jpg', leyenda: 'kiwy programando' },
        { id: '03', src: './img/002.jpg', leyenda: 'kiwy dibujo' },
        { id: '04', src: './img/003.jpg', leyenda: 'Playa muños' },
        { id: '06', src: './img/004.jpg', leyenda: 'vista campanario' },
        { id: '07', src: './img/005.jpg', leyenda: 'vista campamento' },
        { id: '08', src: './img/006.jpg', leyenda: 'Abejorro' },
        { id: '09', src: './img/007.jpg', leyenda: 'Una mara' },
        { id: '10', src: './img/008.jpg', leyenda: 'arbol porteño' },
        { id: '11', src: './img/009.jpg', leyenda: 'laguna del trebol' },
        { id: '12', src: './img/010.jpg', leyenda: 'costa y tarde' },
        { id: '14', src: './img/011.jpg', leyenda: 'trebol invernal' },
        { id: '15', src: './img/012.jpg', leyenda: 'Bandurrias' },
        { id: '16', src: './img/013.jpg', leyenda: 'Laguna del Frey' },
        { id: '17', src: './img/014.jpg', leyenda: 'Paseo por roca' },
        { id: '18', src: './img/015.jpg', leyenda: 'pasep por las vias' },
        { id: '19', src: './img/016.jpg', leyenda: 'dibujo de manu' },
        { id: '20', src: './img/017.jpg', leyenda: 'araña en cuchara' },
        { id: '21', src: './img/018.jpg', leyenda: 'Lago gutierrez' },
        { id: '22', src: './img/019.jpg', leyenda: 'Cerezo' },
    ];
    window.galeria = new Galeria(imagenesACargar);
});