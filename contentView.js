'use strict';
var projectView = [];

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

$(document).ready(function() {
  projectView.handleMainNav();
});
