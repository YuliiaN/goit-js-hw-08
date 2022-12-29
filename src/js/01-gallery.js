// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const divWrapperRef = document.querySelector('.gallery');
divWrapperRef.innerHTML = addItems(galleryItems);

function addItems(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `
<div>
  <a class="gallery__item" href="${original}">
    <img 
    class="gallery__image" 
    src="${preview}" 
    alt="${description}"
  /></a>
</div>
`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
