var apiKey = require('./../.env').apiKey;

function User(username) {
  this.username = username;
  this.repos = [];
}

User.prototype.getUser = function(displayFunction) {
  if (apiKey) {
    var url = 'https://api.github.com/users/' + this.username + '?sort=updated&access_token=' + apiKey;
  } else {
    var url = 'https://api.github.com/users/' + this.username + '?sort=updated';
  }

  $.get(url).then(function(response) {
    displayFunction(response);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
    $('#error').show();
    $('#result').hide();
  });
};

User.prototype.getRepos = function(displayFunction) {
  if (apiKey) {
    var url = 'https://api.github.com/users/' + this.username + '/repos?sort=updated&access_token=' + apiKey;
  } else {
    var url = 'https://api.github.com/users/' + this.username + '/repos?sort=updated';
  }
  $.get(url).then(function(response) {
    displayFunction(response);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
    $('#error').show();
    $('#result').hide();
  });
};

exports.userModule = User;
