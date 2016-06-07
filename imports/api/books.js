export const Books = new Mongo.Collection('Books')

let Schema = {};

Schema.book = new SimpleSchema({
    title: {
        type: String,
        max: 30
    },
    description: {
        type: String,
        max: 100
    }
});

Books.attachSchema(Schema.book);
