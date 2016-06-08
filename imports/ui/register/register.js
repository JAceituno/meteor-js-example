import "./register.html";

Template.register.events({
  "click #register"(event){
      var Profile = {
        firstname: $("#firstnameInput").val(),
        lastname: $("#lastnameInput").val()
      }
      var User = {
        username: $("#emailInput").val(),
        email: $("#emailInput").val(),
        password: $("#passwordInput").val(),
        profile:profile
      }
      Accounts.createUser(user, function(err){
        if(!err){

        }
      });
  }
});
