import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        showModal: function(name, model) {
            this.render(name, {
              into: 'books',
              outlet: 'modal',
              model: model
            });
        },
        removeModal: function() {
        this.disconnectOutlet({
            outlet: 'modal',
            parentView: 'books'
        });
        }
    }
});
