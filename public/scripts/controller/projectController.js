'use strict';

var app = app || {};

(function(module) {
  const projectController = {};

  projectController.init = function(){
    app.PortfolioCreate.fetchAll(projectView.initIndexPage);
    $('.data-content').hide();
    $('#projects').fadeIn();
  }
  module.projectController = projectController;
})(app);
