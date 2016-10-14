var User = require('./../js/user.js').userModule;

$(document).ready(function() {
  $('#submit').click(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    $('#user').text(username);
    var newUser = new User(username);
    newUser.getRepos();
  });
});
