import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        async saveBook(book) {
          let bookModel = this.get('model');
          bookModel.set('title', book.title);
          bookModel.set('author', book.author);
          bookModel.set('pages', book.pages);
          bookModel.set('coverURL', book.coverURL);
          bookModel.set('descriptionURL', book.descriptionURL);
          bookModel.set('tags', book.tags);
          bookModel.set('score', book.score);
          await bookModel.save();
        }
    }    
});
