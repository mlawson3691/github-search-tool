var apiKey = require('./../.env').apiKey;

function User(username) {
  this.username = username;
  this.repos = [];
}

User.prototype.getUser = function(displayFunction) {
  var _this = this;
  $.get('https://api.github.com/users/' + _this.username + '?sort=updated&access_token=' + apiKey).then(function(response) {
    console.log(response);

    displayFunction(response);

  }).fail(function(error) {
    console.log(error.responseJSON.message);
    $('#error').show();
    $('#result').hide();
  });
};

User.prototype.getRepos = function(displayFunction) {
  var _this = this;
  $.get('https://api.github.com/users/' + _this.username + '/repos?sort=updated&access_token=' + apiKey).then(function(response) {
    console.log(response);
    displayFunction(response);

  }).fail(function(error) {
    console.log(error.responseJSON.message);
    $('#error').show();
    $('#result').hide();
  });
};

exports.userModule = User;
