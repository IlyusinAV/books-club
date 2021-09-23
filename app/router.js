import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('book', { path: '/books'}, function() {
    this.route('edit', { path: '/edit/:book_id'});
    this.route('create');
  });
  this.route('speaker', { path: '/speakers'}, function() {
    this.route('edit', { path: '/edit/:speaker_id'});
    this.route('create');
  });
  this.route('login');
  this.route('register');
});

export default Router;
