import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
    normalize(model, hash) {
        return this._super(...arguments);
    }
});
