import "./listBooks.html";
import { Books } from '../../api/books.js';

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
