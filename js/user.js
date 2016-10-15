var apiKey = require('./../.env').apiKey;

function User(username) {
  this.username = username;
}

User.prototype.getUser = function(displayUser, displayRepos) {
  if (apiKey) {
    var urlUser = 'https://api.github.com/users/' + this.username + '?sort=updated&access_token=' + apiKey;
    var urlRepos = 'https://api.github.com/users/' + this.username + '/repos?sort=updated&access_token=' + apiKey;
  } else {
    var urlUser = 'https://api.github.com/users/' + this.username + '?sort=updated';
    var urlRepos = 'https://api.github.com/users/' + this.username + '/repos?sort=updated';
  }

  $.get(urlUser).then(function(response) {
    displayUser(response);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
    $('#error').show();
    $('#result').hide();
  });

  $.get(urlRepos).then(function(response) {
    displayRepos(response);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
    $('#error').show();
    $('#result').hide();
  });
};

exports.userModule = User;
