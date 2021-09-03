import Service from '@ember/service';
import ENV from 'books-club/config/environment';

export default Service.extend ({
  getBooks(search) {
    let queryParams = '';
    if (search) {
      queryParams=`?q=${search}`;
    }
console.log(ENV);
    return fetch(`${ENV.APP.backendURL}/Books${queryParams}`).then((response) => response.json());
  },

  getBook(id) {
    return fetch(`${ENV.APP.backendURL}/Books/${id}`).then((response) => response.json());
  },

  deleteBook(Book) {
    return fetch(`${ENV.APP.backendURL}/Books/${Book.id}`, { method: 'DELETE'});
  },

  createBook(Book) {
    return fetch(`${ENV.APP.backendURL}/Books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Book)
    });
  },

  updateBook(Book) {
    return fetch(`${ENV.APP.backendURL}/Books/${Book.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Book)
    });
  } 
});
  