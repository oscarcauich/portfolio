'use strict';

// var projectsDisplay = [];

// create constructor for projects
function PortfolioCreate(portolioObjs) {
  this.title = portolioObjs.title;
  this.dateCreated = portolioObjs.dateCreated;
  this.gitHubURL = portolioObjs.gitHubURL;
  this.portfolioPicture = portolioObjs.portfolioPicture;
  this. smallDescription = portolioObjs.smallDescription;
  this.fullDescrition = portolioObjs.fullDescrition;
}

PortfolioCreate.all = [];

PortfolioCreate.prototype.toHtml = function() {
  var getTemplate = $('#projects-template').html();
  console.log(getTemplate);
  var template = Handlebars.compile(getTemplate);

  this.daysAgo = parseInt((new Date() - new Date(this.dateCreated))/60/60/24/1000);
  this.dateCreated = this.dateCreated ? `published ${this.daysAgo} days ago` : '(draft)';

  return template(this);
};

// projects.sort(function(a,b) {
//   return (new Date(b.dateCreated)) - (new Date(a.dateCreated));
// });
//
// projects.forEach(function(portolioObjs) {
//   projectsDisplay.push(new PortfolioCreate(portolioObjs));
// });
// projectsDisplay.forEach(function(project) {
//   $('#projects').append(project.toHtml());
// });
PortfolioCreate.loadAll = function(projectsData) {
  projectsData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  projectsData.forEach(function(ele) {
    PortfolioCreate.all.push(new PortfolioCreate(ele));
  })
}

PortfolioCreate.fetchAll = function() {
  if (localStorage.projectsData) {
    // When rawData is already in localStorage,
    // we can load it with the .loadAll function above,
    // and then render the index page (using the proper method on the articleView object).

    // PortfolioCreate.loadAll(JSON.parse(localStorage.rawData)); //TODO: What do we pass in to loadAll()?

  } else {
    let jsonData = '/data/projects.json';
    $.getJSON(jsonData)
        .then(function(projectsData) {
          localStorage.projectsData = JSON.stringify(projectsData);
          PortfolioCreate.loadAll(projectsData);
          projectView.initIndexPage();
          console.log('workd fool')
        })
  }
}

$(document).ready(function() {
  $('.lnr-cross').hide();
  $('.lnr-menu').on('click', function(){
    $('.nav-menu').slideToggle('slow',function(){
      $('.lnr-menu').hide();
      $('.lnr-cross').show();
    });
  })
  $('.lnr-cross').on('click', function(){
    $('.nav-menu').slideToggle('slow',function(){
      $('.lnr-cross').hide();
      $('.lnr-menu').show();
    })
  })
});
