var apiKey = require('./../.env').apiKey;

function User(username) {
  this.username = username;
  this.repos = [];
}

User.prototype.getRepos = function(displayUser, displayRepos) {
  var _this = this;
  $.get('https://api.github.com/users/' + _this.username + '/repos?sort=created&access_token=' + apiKey).then(function(response) {
    // console.log(response);

    displayUser(response["0"].owner);
    displayRepos(response);

  }).fail(function(error) {
    console.log(error.responseJSON.message);
    $('#error').show();
    $('#result').hide();
  });
};

exports.userModule = User;
