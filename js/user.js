var apiKey = require('./../.env').apiKey;

function User(username) {
  this.username = username;
  this.repos = [];
}

User.prototype.getRepos = function() {
  var _this = this;
  $.get('https://api.github.com/users/' + _this.username + '/repos?sort=created&access_token=' + apiKey).then(function(response) {
    console.log(response);
    $('#repos').empty();
    response.forEach(function(repo) {
      $('#repos').append('<li><a href="' + repo.svn_url + '" target="_blank"><h4>' + repo.name + '</h4></a></li>');
      if (repo.description) {
        $('li').last().append('<p>' + repo.description + '</p>');
      }
    });
    $('#result').show();
    $('#error').hide();
  }).fail(function(error) {
    console.log(error.responseJSON.message);
    $('#error').show();
    $('#result').hide();
  });
};

exports.userModule = User;
