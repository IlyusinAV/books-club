import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { later } from '@ember/runloop';


export default Route.extend ({
  dataService: service('data'),
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model({ search }) {
    let promise = new Promise((resolve, reject) => {
      try {
        let books = search ? this.get("dataService").getBooks(search) : this.get("dataService").getBooks();
        resolve(books);
      }
      catch (e) {
        reject('Connection failed');
      }
    }).
    then((books) => {
      this.set('controller.model', books);
    }).
    finally(() => {
      if (promise === this.get('modelPromise')) {
        this.set('controller.isLoading', false);
      }
    });

    this.set('modelPromise', promise);
    return { isLoading: true };
  },

  setupController(controller, model) {
    this._super(...arguments);
    if (this.get('modelPromise')) {
      controller.set('isLoading', true);
    }
  },

  resetController(controller, isExiting, transition) {
    this._super(...arguments);
    if (isExiting) {
      controller.set('isLoading', false);
      this.set('modelPromise', null);
    }
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