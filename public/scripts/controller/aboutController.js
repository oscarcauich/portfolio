'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = function() {
    $('.data-content').hide();
    $('#about-me').fadeIn();
    app.repos.requestRepos(app.repoView.index);
  }
  module.aboutController = aboutController;
})(app);
