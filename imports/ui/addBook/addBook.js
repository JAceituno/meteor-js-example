import "./addBook.html";

Template.addBook.events({
  'click #add'(event){
    var bookCreated = {
      title: $('#title').val(),
      description: $('#description').val()
    }
    Meteor.call('book.create', bookCreated, function(err){
      if(err){
        Materialize.toast("Error inesperado", 4000);
      }else {
        Materialize.toast("Libro agregado", 4000);
        Router.go('/listing');
      }
    });
  }
});
