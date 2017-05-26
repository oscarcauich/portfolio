'use strict';

var app = app || {};

(function(module) {
  const projectController = {};

  projectController.init = function(){
    $('#projects').empty();
    app.PortfolioCreate.fetchAll(projectView.initIndexPage);
    $('.data-content').hide();
    $('#projects').fadeIn();
  }
  module.projectController = projectController;
})(app);
