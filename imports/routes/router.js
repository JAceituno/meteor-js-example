import { Router } from "meteor/iron:router";

import "../ui/layout/layout.js";
import "../ui/navbar/navbar.js";
import "../ui/megarokr/megarokr.js";
import "../ui/listBooks/listBooks.js";
import "../ui/register/register.js";
import "../ui/login/login.js";
import "../ui/addBook/addBook.js";

Router.configure({
    layoutTemplate:"layout"
});

Router.route('/',function(){
    this.render("megarokr");
});

Router.route('/listing',function(){
    if(Meteor.user()){
      this.render("listBooks");
    }else{
      Materialize.toast('No esta registrado, este man!!!', 4000);
      this.render("register");
    }
});

Router.route('/register',function(){
    this.render("register");
});

Router.route('/login',function(){
    this.render("login");
});

Router.route('/libros/addBook',function(){
    this.render("addBook");
});
