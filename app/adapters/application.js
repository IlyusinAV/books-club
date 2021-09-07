import DS from 'ember-data';
import ENV from 'books-club/config/environment';

export default DS.JSONAPIAdapter.extend({
    host: ENV.APP.backendURL,

    init() {
        this._super(...arguments);
        this.set('headers', {
        'Content-Type': 'application/json'
        });
    }
});
