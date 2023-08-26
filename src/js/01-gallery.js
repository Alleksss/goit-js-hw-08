// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', openLargeImage);
gallery.append(...genGallaryItems(galleryItems));

function openLargeImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG')
        return;
};
const lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionSelector: 'img',
      captionType: 'attr',
      captionPosition: 'bottom',
      captionsData: 'alt', 
      captionDelay: 250, 
    });
    
    
function genGallaryItems(arr) {
  return arr.map(({ description, original, preview }) => {
    const item = document.createElement('li');
    item.className = 'gallery__item';
    const a = document.createElement('a');
    a.className = 'gallery__link';
    a.href = original;
    item.append(a);
    const img = document.createElement('img');
    img.src = preview;
    img.alt = description;
    a.append(img);
    return item;
  });
}


// console.log(galleryItems);
