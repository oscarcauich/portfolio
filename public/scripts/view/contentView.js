'use strict';
const projectView = {};

projectView.initIndexPage = function() {
  app.PortfolioCreate.all.forEach(function(article) {
    $('#about-me').hide();
    $('#projects').append(article.toHtml())
  });

  $('#funFact').text(app.PortfolioCreate.funFacts());
};
