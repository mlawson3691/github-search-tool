var apiKey = require('./../.env').apiKey;

function User(username) {
  this.username = username;
  this.repos = [];
}

User.prototype.getRepos = function() {
  var _this = this;
  $.get('https://api.github.com/users/' + _this.username + '/repos?sort=created&access_token=' + apiKey).then(function(response) {
    console.log(response);
    if (response !== null) {
      response.forEach(function(repo) {
        $('#repos').append('<li><a href="' + repo.svn_url + '" target="_blank"><h4>' + repo.name + '</h4></a></li>');
        if (repo.description) {
          $('li').last().append('<p>' + repo.description + '</p>');
        }
        $('div.hidden').removeClass('hidden');
      });
    }
  }).fail(function(error) {
    console.log(error.responseJSON.message);
    $('#hidden-div').html('That username does not exist. Try again!');
    $('div.hidden').removeClass('hidden');
  });
};

exports.userModule = User;
