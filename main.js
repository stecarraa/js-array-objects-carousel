// Consegna:
// Dato un array di oggetti letterali con:
// url dell’immagine
// titolo
// descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3: Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
// Array da usare:


const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const carouselImage = document.getElementsByClassName('carousel-image')[0];
const thumbImage = document.getElementsByClassName('thumbnail-section')[0];
let item = '';
let thumb = '';
let active = 1;

for (let i = 0; i < images.length; i++) {
    item += `
    <div class="col-12">

    <div class="carousel-container mb-5 ">
        <div class="position-relative carousel-image">
            <img class="w-100 carousel-img" src="${images[i].url}" alt=""> 
            <div class="image-text position-absolute top-0 start-50 p-2 text-end">
                <h2>${images[i].title}</h2>
                <h4>${images[i].description}</h4> 
            </div>
        </div>
        
    </div>`
    thumb += `
        <div class="thumbnail-section d-flex justify-content-between">
            <img class="w-5" src="${images[i].url}" alt="">
        </div>
    `
}

carouselImage.innerHTML = item;
document.getElementsByClassName('carousel-img')[active].classList.add('active');

thumbImage.innerHTML += thumb;
document.getElementsByClassName('thumbnail-section')[active].classList.add('active');

// | prendo il bottone "next"
const btnNext = document.getElementById('next-button');



const btnPre = document.getElementById('prev-button')




btnPre.addEventListener('click', function() {
    if(active == 0) {                                                                   
        active = images.length - 1; 

        document.querySelector('.carousel-img.active').classList.remove('active');
        document.getElementsByClassName('carousel-img')[active].classList.add('active');

        document.querySelector('.thumbnail-section.active').classList.remove('active');
        document.getElementsByClassName('thumbnail-section')[active].classList.add('active');
    } else if(active < images.length) {
        --active
        document.querySelector('.carousel-img.active').classList.remove('active');
        document.getElementsByClassName('carousel-img')[active].classList.add('active');

        document.querySelector('.thumbnail-section.active').classList.remove('active');
        document.getElementsByClassName('thumbnail-section')[active].classList.add('active');
    } 
});


btnNext.addEventListener('click', function() {
    if(active < images.length - 1) {
        ++active
        document.querySelector('.carousel-img.active').classList.remove('active');
        document.getElementsByClassName('carousel-img')[active].classList.add('active');

        document.querySelector('.thumbnail-section.active').classList.remove('active');
        document.getElementsByClassName('thumbnail-section')[active].classList.add('active');
    } else if(active == images.length - 1) { 
        active = 0;
        document.querySelector('.carousel-img.active').classList.remove('active');
        document.getElementsByClassName('carousel-img')[active].classList.add('active');

        document.querySelector('.thumbnail-section.active').classList.remove('active');
        document.getElementsByClassName('thumbnail-section')[active].classList.add('active');
    }
});

    const timer = setInterval(btnPre, 3000);