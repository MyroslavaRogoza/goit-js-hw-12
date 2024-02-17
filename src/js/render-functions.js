import { galleryApi } from './pixabay-api.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iconError from '../img/iconError.svg';

import axios from 'axios';

const form = document.querySelector('form');
const container = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.loadBtn');
const loadMoreLoader = document.querySelector('.load-more');

const galleryInstance = new galleryApi();
let query = null;
let totalPages = 0;
let galleryItemHeight;

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) {
  evt.preventDefault();

  const userData = evt.target.elements.userInput.value.trim();
  query = userData;
  galleryInstance.page = 1;
  loader.classList.remove('hidden');
  loadMoreBtn.classList.add('hidden');

  galleryInstance
    .getDataImg(userData)
    .then(item => {
      if (item.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          theme: 'dark',
          messageColor: '#fafafb',
          backgroundColor: '#ef4040',
          position: 'topRight',
          iconUrl: iconError,
          iconColor: '#fff',
          maxWidth: '350px',
        });
        container.innerHTML = '';
      }
      return item.hits;
    })
    .then(createGallery);
  loadMoreBtn.classList.remove('hidden');
  evt.target.reset();
}

function galleryItemTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
  <div class='img-container'>
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"
      />
    </a>
</div>
    <ul class='img-data-container'>
    <li class='img-data-item'>
    <h3>Likes</h3>
    <p>${likes}</p>
    </li>

    <li class='img-data-item'>
    <h3>Views</h3>
    <p>${views}</p>
    </li>

    <li class='img-data-item'>
    <h3>Comments</h3>
    <p>${comments}</p>
    </li>

    <li class='img-data-item'>
    <h3>Downloads</h3>
    <p>${downloads}</p>
    </li> 

    </ul>
  </li>`;
}

function createGallery(item) {
  const markup = item.map(galleryItemTemplate).join('');
  container.innerHTML = markup;
  let lightBoxInstance = new SimpleLightbox('.gallery-link ', {
    captionPosition: 'bottom',
    captionSelector: 'img',
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightBoxInstance.refresh();
  const galleryItem = document.querySelector('.gallery-item');
  galleryItemHeight = galleryItem.getBoundingClientRect().height;
}

loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
async function onLoadMoreBtnClick() {
  loadMoreBtn.classList.add('hidden');
  loadMoreLoader.classList.remove('hidden');
  galleryInstance.page++;

  const response = await galleryInstance.getDataImg(query);
  totalPages = response.totalHits;
  loadMoreLoader.classList.add('hidden');
  loadMoreGalley(response.hits);

  checkLoadBtnStatus(totalPages);
  window.scrollBy({
    top: galleryItemHeight * 2,
    behavior: 'smooth',
  });
}

function checkLoadBtnStatus(totalhits) {
  const groupOfPages = Math.ceil(totalhits / galleryInstance.per_page);
  if (galleryInstance.page < groupOfPages) {
    loadMoreBtn.classList.remove('hidden');
  } else {
    loadMoreBtn.classList.add('hidden');
    iziToast.show({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
      theme: 'dark',
      messageColor: '#fafafb',
      backgroundColor: '#8f7dff',
      maxWidth: '350px',
    });
  }
}

function loadMoreGalley(item) {
  const markup = item.map(galleryItemTemplate).join('');
  container.insertAdjacentHTML('beforeend', markup);
  lightBoxInstance.refresh();
  let lightBoxInstance = new SimpleLightbox('.gallery-link ', {
    captionPosition: 'bottom',
    captionSelector: 'img',
    captionsData: 'alt',
    captionDelay: 250,
  });
  // lightBoxInstance.refresh();
}
