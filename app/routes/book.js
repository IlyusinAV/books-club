import Route from '@ember/routing/route';

export default Route.extend ({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  
  model({ search }) {
    return this.get('store').findAll('book');
  },

  setupController(controller, model) {
    this._super(...arguments);
  },

  actions: {
    refreshBooks() {
      this.refresh();
    },
    loading(transition, originRoute) {
      return false;
    }
  }
});