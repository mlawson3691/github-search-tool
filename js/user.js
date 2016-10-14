var apiKey = require('./../.env').apiKey;

function User(username) {
  this.username = username;
  this.repos = [];
}

User.prototype.getRepos = function() {
  var _this = this;
  $.get('https://api.github.com/users/' + _this.username + '/repos?sort=created&access_token=' + apiKey).then(function(response) {
    console.log(response);
    console.log(response.length);
    $('#repos1').empty();
    $('#repos2').empty();
    var id;
    response.forEach(function(repo, i) {
      if (i < response.length/2) {
        id = '#repos1';
      } else {
        id = '#repos2';
      }
      $(id).append('<div class="well"><a href="' + repo.svn_url + '" target="_blank"><h4>' + repo.name + '</h4></a></div>');
      if (repo.description) {
        $('.well').last().append('<p>' + repo.description + '</p>');
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
