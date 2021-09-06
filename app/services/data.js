import Service from '@ember/service';
import ENV from 'books-club/config/environment';

export default Service.extend ({
  getBooks(search) {
    let queryParams = '';
    if (search) {
      queryParams=`?q=${search}`;
    }
    return fetch(`${ENV.APP.backendURL}/books${queryParams}`).then((response) => response.json());
  },

  getBook(id) {
    return fetch(`${ENV.APP.backendURL}/books/${id}`).then((response) => response.json());
  },

  deleteBook(book) {
    return fetch(`${ENV.APP.backendURL}/books/${book.id}`, { method: 'DELETE'});
  },

  createBook(book) {
    return fetch(`${ENV.APP.backendURL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });
  },

  updatebook(book) {
    return fetch(`${ENV.APP.backendURL}/books/${book.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });
  } 
});
  