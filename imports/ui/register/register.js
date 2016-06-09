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
        profile: Profile
      }
      Accounts.createUser(User, function(err){
        if(err){
          Materialize.toast('User already exists', 4000);
        }else{
          Materialize.toast('Registrado Correctamente', 4000);
        }
      });
  }
});
