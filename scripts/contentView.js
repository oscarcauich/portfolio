'use strict';
const projectView = {};

projectView.handleMainNav = function() {
  $('.menu-nav').on('click', '.tab', function() {
    if($(this).text() == ' Home '){
      $('.data-content').fadeIn();
    } else {
      $('.data-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    }
  });

  $('.main-nav .tab:first').click();
};

projectView.initIndexPage = function() {
  PortfolioCreate.all.forEach(function(article) {
    $('#projects').append(article.toHtml())
  });
};
$(document).ready(function() {
  projectView.handleMainNav();
});
