'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = function() {
    $('.data-content').hide();
    $('#about-me').fadeIn();
  }
  module.aboutController = aboutController;
})(app);
