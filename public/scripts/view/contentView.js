'use strict';
const projectView = {};

// projectView.handleMainNav = function() {
//   $('.menu-nav').on('click', '.tab', function() {
//     if($(this).text() == ' Home '){
//       $('#projects').fadeIn();
//     } else {
//       $('.data-content').hide();
//       $('#' + $(this).data('content')).fadeIn();
//     }
//   });
//
//   $('.main-nav .tab:first').click();
// };

projectView.initIndexPage = function() {
  app.PortfolioCreate.all.forEach(function(article) {
    $('#about-me').hide();
    $('#projects').append(article.toHtml())
  });

  $('#funFact').text(app.PortfolioCreate.funFacts());
};
// $(document).ready(function() {
//   projectView.handleMainNav();
// });
