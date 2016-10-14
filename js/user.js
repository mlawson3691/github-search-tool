var apiKey = require('./../.env').apiKey;

function User(username) {
  this.username = username;
  this.repos = [];
}

User.prototype.getRepos = function() {
  var _this = this;
  $.get('https://api.github.com/users/' + _this.username + '/repos?sort=created&access_token=' + apiKey).then(function(response) {
    console.log(response);
    
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
