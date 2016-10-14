var User = require('./../js/user.js').userModule;

var displayUser = function(user) {
  console.log(user);

  $('#user-avatar').attr('src', user.avatar_url);
  $('#user').parent().attr('href', user.html_url);
}

var displayRepos = function(repos) {
  $('#repos1').empty();
  $('#repos2').empty();
  var id;
  repos.forEach(function(repo, i) {
    if (i < repos.length/2) {
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
}

$(document).ready(function() {

  $('#submit').click(function(event) {
    event.preventDefault();
    $('#load-text').hide();
    var username = $('#username').val();
    $('#username').val('');
    $('#user').text(username);
    var newUser = new User(username);
    newUser.getRepos(displayUser, displayRepos);
  });
});
