import Base from 'ember-simple-auth/authenticators/base';
import ENV from 'books-club/config/environment';

export default Base.extend({
  restore(data) {
  },

  authenticate(user) {
    return fetch(`${ENV.APP.backendURL}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
  },

  invalidate(data) {
  }
});
