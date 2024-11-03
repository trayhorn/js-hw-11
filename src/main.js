import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loading = document.querySelector('.loading');

const lightbox = new SimpleLightbox('.item-link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const queryInput = e.currentTarget.elements.query;

  if (queryInput.value === '') {
    iziToast.error({
      message:
        'Please enter a value!',
    });
  } else {
    getImagesOnSearch(queryInput.value)
      .then(res => {
        if (res.hits.length === 0) {
          iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        } else {
          loading.classList.add('is-hidden');
          gallery.innerHTML = createMarkUp(res.hits);
          lightbox.refresh();
        }
      })
      .catch(error => {
        loading.classList.add('is-hidden');
        console.log(error)
      });
  }
}

function getImagesOnSearch(query) {
  const params = new URLSearchParams({
    key: '29734383-6ec437d7a0c5df52cef54a0f9',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  loading.classList.remove('is-hidden');
  gallery.innerHTML = '';

  return fetch(`https://pixabay.com/api/?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

function createMarkUp(arr) {
  return arr
    .map(
      el =>
        `<li class="gallery-item">
            <a class="item-link" href="${el.largeImageURL}">
              <img
                class="item-image"
                src="${el.webformatURL}"
                alt="${el.tags}"
              >
            </a>
            <div class="item-stats_container">
              <p class="item-stats"><span>Likes</span>${el.likes}</p>
              <p class="item-stats"><span>Views</span>${el.views}</p>
              <p class="item-stats"><span>Comments</span>${el.comments}</p>
              <p class="item-stats"><span>Downloads</span>${el.downloads}</p>
            </div>
          </li>`
    )
    .join('');
}