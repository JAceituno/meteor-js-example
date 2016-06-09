export const Books = new Mongo.Collection('books');

let Schema = {};
Schema.book = new SimpleSchema({
  title: {
    type:String,
    max: 30
  },
  description: {
    type: String,
    max: 100
  }
});

Books.attachSchema(Schema.book);

Meteor.methods({
  'book.create'(book){
    if(this.userId){
      Books.insert(book, function(err){
        if(err){
          throw new Meteor.error('No se pudo agregar el libro');
        }
      });
    }else {
      throw new Meteor.error('No tiene permisos para realizar esta accion');
    }
  }
});
