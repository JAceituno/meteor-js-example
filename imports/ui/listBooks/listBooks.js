import "./listBooks.html";
<<<<<<< HEAD
import { Books } from '../../api/books.js';
=======
import { Books } from '../../api/book.js';
>>>>>>> e92b29f64c00be0ba62f8374c17c3bf9723866bc

Template.listBooks.onRendered(function(){
  $('.collapsible').collapsible({
    accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
});

Template.listBooks.helpers({
  books(){
    return Books.find({});
  }
});
