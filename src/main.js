import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import createMarkUp from './js/render-functions';
import getImagesOnSearch from './js/pixabay-api';


const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loading = document.querySelector('.loading');
const target = document.querySelector('.js-guard');

let currentPage = 1;
let queryInput = '';

const lightbox = new SimpleLightbox('.item-link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

// Infinite scroll

const options = {
  root: null,
  rootMargin: '200px',
  threshold: 1.0,
};

const onLoad = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentPage++;
      getImagesOnSearch(queryInput, currentPage)
        .then(({ hits }) => {
          loading.classList.remove('is-hidden');
          gallery.insertAdjacentHTML('beforeend', createMarkUp(hits));
          lightbox.refresh();
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          loading.classList.add('is-hidden');
        });
    }
  });
};

const observer = new IntersectionObserver(onLoad, options);

// Main part

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  queryInput = e.currentTarget.elements.query.value;

  if (queryInput === '') {
    iziToast.error({
      message:
        'Please enter a value!',
    });
    return;
  }
  getImagesOnSearch(queryInput, currentPage)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        loading.classList.remove('is-hidden');
        gallery.insertAdjacentHTML('beforeend', createMarkUp(hits));
        observer.observe(target);
        lightbox.refresh();
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loading.classList.add('is-hidden');
    });
}