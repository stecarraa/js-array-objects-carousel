Consegna:
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

// immagine da cui voglio partire nell'array
let activeElementIndex = 0;


// mi vado a prendere dove visualizzare le img nel dome
const imgsWrapper = document.querySelector('.carousel-container');
const imgList = imgsWrapper.children;





for(index = 0 ; index < givenImages.length ; index++){
    // creo l'elemento html di tipo img
const newImg = document.createElement('img');

// aggiungo le classi che voglio che questo abbia
newImg.classList.add('w-100', 'rounded');

// cambio l'src dell'immagine => .setAttribute(quale attributo, contenuto dell'attributo)
newImg.setAttribute('src', givenImages[index]);

//  aggiungo l'immagine creata alla lista
imgsWrapper.append(newImg);

imgList[activeElementIndex].classList.add('active');
}










// | prendo il bottone "next"
const btnNext = document.getElementById('next-button');

btnNext.addEventListener('click', nextImage);

const btnPre = document.getElementById('prev-button')

btnPre.addEventListener('click', prevImage);

function nextImage(){
    imgList[activeElementIndex].classList.remove('active');
   
    // ? scorro di un posto l'elemento attivo
    activeElementIndex++;

    //  se siamo alla fine dell'array, non uscire ma ricomincia dal primo elemento della lista.
    if (activeElementIndex === imgList.length){
        activeElementIndex = 0;
    }

    // aggiungo la classe active al nuovo elemento attivo
    imgList[activeElementIndex].classList.add('active');

    console.log('Cliccato! L\'elemento adesso attivo è in posizione: ' + activeElementIndex);
}

function prevImage(){
    imgList[activeElementIndex].classList.remove('active');
   
    // ? scorro di un posto l'elemento attivo
    activeElementIndex--;

    //  se siamo alla fine dell'array, non uscire ma ricomincia dal primo elemento della lista.
    if (activeElementIndex === -1){
        activeElementIndex = imgList.length - 1;
    }

    // aggiungo la classe active al nuovo elemento attivo
    imgList[activeElementIndex].classList.add('active');

    console.log('Cliccato! L\'elemento adesso attivo è in posizione: ' + activeElementIndex);
}

const timer = setInterval(nextImage, 3000);