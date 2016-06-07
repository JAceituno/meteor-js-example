import { Router } from "meteor/iron:router"
import "../ui/layout/layout.js"
import "../ui/navbar/navbar.js"
<<<<<<< HEAD
import "../ui/megarokr/megarokr.js"
import "../ui/listBooks/listBooks.js"
import "../ui/register/register.js"
import "../ui/login/login.js"

=======
import "../ui/listBooks/listBooks.js"
import "../ui/megarokr/megarokr.js";
>>>>>>> e92b29f64c00be0ba62f8374c17c3bf9723866bc

Router.configure({
    layoutTemplate:"layout"
});

Router.route('/',function(){
    this.render("megarokr");
<<<<<<< HEAD
});

Router.route('/listing',function(){
    this.render("listBooks");
});

Router.route('/register',function(){
    this.render("register");
});

Router.route('/login',function(){
    this.render("login");
=======
});

Router.route('/listing',function(){
    this.render("listBooks");
>>>>>>> e92b29f64c00be0ba62f8374c17c3bf9723866bc
});
