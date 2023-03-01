import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);;

const Lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: '250ms'
});


function createGalleryCardMarkup(cards) {
    return cards.map(({preview, original, description}) => {
    return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`
    }).join('');

}

/* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a> */