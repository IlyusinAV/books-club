import DS from 'ember-data';

export default DS.Model.extend({
    tittle: DS.attr('string'),
    author: DS.attr('string'),
    pages: DS.attr('number'),
    coverURL: DS.attr('string'),
    descriptionURL: DS.attr('string'),
    tags: DS.attr('string'),
    score: DS.attr('string')
});
