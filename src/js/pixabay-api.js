import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.loadBtn');

export class galleryApi {
  constructor() {
    this.url = 'https://pixabay.com/api/?';
    this.page = 1;
    this.per_page = 15;
  }
  async getDataImg(userInput) {
    const params = new URLSearchParams({
      key: '42280899-738d1c20fb5924f395bcd6368',
      q: `${userInput}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: this.page,
      per_page: this.per_page,
    });
    try {
      const response = await axios.get(this.url + params);
      loader.classList.add('hidden');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
