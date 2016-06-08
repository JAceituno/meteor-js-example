import "./login.html";

Template.login.events({
  "click #login"(event){
      var User = {
        username: $("#emailInput").val(),
        email: $("#emailInput").val(),
        password: $("#passwordInput").val()
      }
      Meteor.loginWithPassword(user, callback);
  }
});
