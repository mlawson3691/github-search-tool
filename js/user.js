var apiKey = require('./../.env').apiKey;

function User(username) {
  this.username = username;
  this.repos = [];
}

User.prototype.getUser = function(displayFunction) {
  $.get('https://api.github.com/users/' + this.username + '?sort=updated&access_token=' + apiKey).then(function(response) {
    displayFunction(response);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
    $('#error').show();
    $('#result').hide();
  });
};

User.prototype.getRepos = function(displayFunction) {
  $.get('https://api.github.com/users/' + this.username + '/repos?sort=updated&access_token=' + apiKey).then(function(response) {
    displayFunction(response);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
    $('#error').show();
    $('#result').hide();
  });
};

// handle API calls without a key

User.prototype.getUserNoKey = function(displayFunction) {
  $.get('https://api.github.com/users/' + this.username + '?sort=updated').then(function(response) {
    displayFunction(response);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
    $('#error').show();
    $('#result').hide();
  });
};

User.prototype.getReposNoKey = function(displayFunction) {
  $.get('https://api.github.com/users/' + this.username + '/repos?sort=updated').then(function(response) {
    displayFunction(response);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
    $('#error').show();
    $('#result').hide();
  });
};

exports.userModule = User;
