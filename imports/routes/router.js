import { Router } from "meteor/iron:router"
import "../ui/layout/layout.js"
import "../ui/navbar/navbar.js"
import "../ui/listBooks/listBooks.js"
import "../ui/megarokr/megarokr.js";

Router.configure({
    layoutTemplate:"layout"
});

Router.route('/',function(){
    this.render("megarokr");
});

Router.route('/listing',function(){
    this.render("listBooks");
});
