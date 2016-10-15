var User = require('./../js/user.js').userModule;
var apiKey = require('./../.env').apiKey;

var displayUser = function(user) {
  $('#user-avatar').attr('src', user.avatar_url);
  $('#user').parent().parent().attr('href', user.html_url);
  $('#user').text(user.login);
  $('#name').text(user.name);
  $('#email').text(user.email);
  $('#location').text(user.location);
  $('#followers').text(user.followers);
  $('#date').text(moment(user.created_at).format('MMM D, YYYY'));
};

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
    $(id).append('<div class="well"><a href="' + repo.svn_url + '" target="_blank"><h4>' + repo.name + '</h4></a><p>Last updated: ' + moment(repo.created_at).format('MMM D, YYYY') + '</p></div>');
    if (repo.description) {
      $('.well').last().append('<p>' + repo.description + '</p>');
    }
  });
  $('#result').show();
  $('#error').hide();
};

$(document).ready(function() {
  $('#submit').click(function(event) {
    event.preventDefault();
    $('#load-text').hide();
    var username = $('#username').val();
    $('#username').val('');
    var newUser = new User(username);
    newUser.getUser(displayUser, displayRepos);
  });
});
