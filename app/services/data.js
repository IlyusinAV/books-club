import Service from '@ember/service';
import ENV from 'books-club/config/environment';

export default Service.extand ({
  getBooks(search) {
    let queryParams = '';
    if (search) {
      queryParams=`?q=${search}`;
    }

    return fetch(`${ENV.backendURL}/Books${queryParams}`).then((response) => response.json());
  },

  getBook(id) {
    return fetch(`${ENV.backendURL}/Books/${id}`).then((response) => response.json());
  },

  deleteBook(Book) {
    return fetch(`${ENV.backendURL}/Books/${Book.id}`, { method: 'DELETE'});
  },

  createBook(Book) {
    return fetch(`${ENV.backendURL}/Books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Book)
    });
  },

  updateBook(Book) {
    return fetch(`${ENV.backendURL}/Books/${Book.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Book)
    });
  } 
});
  