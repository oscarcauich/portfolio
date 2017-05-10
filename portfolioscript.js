'use strict';

// create constructor for projects
function PortfolioCreate(portolioObjs) {
  this.title = portolioObjs.title;
  this.dateCreated = portolioObjs.dateCreated;
  this.gitHubURL = portolioObjs.gitHubURL;
  this.portfolioPicture = portolioObjs.portfolioPicture;
  this. smallDescription = portolioObjs.smallDescription;
  this.fullDescrition = portolioObjs.fullDescrition;
}

$(document).ready(function() {
  $('.lnr-menu').on('click', function(){
    $('#main-nav').removeClass();
    $('#main-nav').addClass('show-menu');
  })
});
