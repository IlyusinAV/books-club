import Component from '@ember/component';

export default Component.extend({
    actions: {
        save: function() {                                        
          this.$('.modal').modal('hide');                   
          this.sendAction('save');                          
        }
      },
      show: function() {
        this.$('.modal').modal().on('hidden.bs.modal', function() {
          this.sendAction('close');
        }.bind(this));
      }.on('didInsertElement')     
});
