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
      later(async () => {
        try {
          let books = search ? await this.get("dataService").getbooks(search) : await this.get("dataService").getbooks();
          resolve(books);
        }
        catch (e) {
          reject('Connection failed');
        }
      }, 1000);
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
    refreshbooks() {
      this.refresh();
    },
    loading(transition, originRoute) {
      return false;
    }
  }
});