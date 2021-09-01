import Service from '@ember/service';
import config from 'ember-test2/config/environment';

export default Service.extand ({
    async readBooks(searchValue) {
      let searchSegm = searchValue ? `?q=${searchValue}` : '';
      let response = await fetch(`${config.APP.backEndURL}/Books${searchSegm}`);
      return response.json();
    },
  
    async readBook(id) {
      let response = await fetch(`${config.APP.backEndURL}/Books/${id}`);
      return response.json();
    },
  
    changeBook(Book) {
      return fetch(`${config.APP.backEndURL}/Books/${Book.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Book)
      });
    },
  
    createBook(Book) {
      return fetch(`${config.APP.backEndURL}/Books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Book)
      });
    },
  
    deleteBook(id) {
      return fetch(`${config.APP.backEndURL}/Books/${id}`, {
        method: 'DELETE',
      });
    }
});
  