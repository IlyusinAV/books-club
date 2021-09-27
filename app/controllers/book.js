import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ["search"],
    search: '',
    actions: {
        save: function() {
          // действие
        }
      }
});
