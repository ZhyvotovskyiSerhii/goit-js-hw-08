
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);
// import { galleryItems } from './gallery-items.js';
// // Change code below this line

const galleryImages = {
    itemsList: document.querySelector('.gallery'),
  };
  
  function createGalleryImages(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
         `;
      })
      .join('');
  }
  
  galleryImages.itemsList.innerHTML = createGalleryImages(galleryItems);
  
  new SimpleLightbox('.gallery a', {
    scaleImageToRatio: false,
    showCounter: true,
    captionsData: 'alt',
    captionDelay: 250,
    close: true,
    loop: true,
    disableScroll: true,
    enableKeyboard: true,
    docClose: true,
    fadeSpeed: 500,
  });
  
console.log(galleryItems);

