import axios from 'axios';
const loader = document.querySelector('.loader');

export class galleryApi {
  constructor() {
    this.url = 'https://pixabay.com/api/?';
  }
  async getDataImg(userInput) {
    const params = new URLSearchParams({
      key: '42280899-738d1c20fb5924f395bcd6368',
      q: `${userInput}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: 1,
      per_page: 15,
    });
    try {
      const response = await axios.get(this.url + params);
      loader.classList.add('loader-hide');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
