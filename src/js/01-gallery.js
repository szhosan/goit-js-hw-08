import { galleryItems } from "./gallery-items.js";
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryDivRef = document.querySelector(".gallery");
galleryDivRef.innerHTML = createGalleryMarkup(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});
  

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join("");
}
