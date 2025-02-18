import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// @ts-ignore
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import createMarkUp from './js/render-functions';
import getImagesOnSearch from './js/pixabay-api';


const form = document.querySelector('.form') as HTMLElement;
const gallery = document.querySelector('.gallery') as HTMLElement;
const loading = document.querySelector('.loading') as HTMLElement;
const target = document.querySelector('.js-guard') as HTMLElement;


let currentPage: number = 1;
let queryInput: string = '';

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

const onLoad = (entries: IntersectionObserverEntry[]) => {
  console.log(entries);
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

function onFormSubmit(e: SubmitEvent) {
  e.preventDefault();
  const queryInput = e.currentTarget as HTMLFormElement;
  const queryValue = (
    queryInput.elements.namedItem('query') as HTMLInputElement
  ).value;

  if (queryValue === '') {
    iziToast.error({
      message:
        'Please enter a value!',
    });
    return;
  }
  getImagesOnSearch(queryValue, currentPage)
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