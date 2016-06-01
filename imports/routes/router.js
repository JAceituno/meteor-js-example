import { Router } from "meteor/iron:router"
import "../ui/layout/layout.js"
import "../ui/navbar/navbar.js"
import "../ui/megarokr/megarokr.js"
import "../ui/aceituno/aceituno.js"

Router.configure({
    layoutTemplate:"layout"
});

Router.route('/',function(){
    this.render("megarokr");    
});

Router.route('/aceituno',function(){
    this.render("aceituno");    
});