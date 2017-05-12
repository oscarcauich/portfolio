'use strict';

var projectsDisplay = [];

// create constructor for projects
function PortfolioCreate(portolioObjs) {
  this.title = portolioObjs.title;
  this.dateCreated = portolioObjs.dateCreated;
  this.gitHubURL = portolioObjs.gitHubURL;
  this.portfolioPicture = portolioObjs.portfolioPicture;
  this. smallDescription = portolioObjs.smallDescription;
  this.fullDescrition = portolioObjs.fullDescrition;
}
PortfolioCreate.prototype.toHtml = function() {
  var $newProject = $('projects.project-template').clone();
  $newProject.removeClass('project-template');

  $newProject.find('date').html('about ' + parseInt((new Date() - new Date(this.dateCreated))/60/60/24/1000) + ' days ago');

  $newProject.find('#project-name').html(this.title);
  $newProject.find('.project-discription').html(this.smallDescription);
  $newProject.append('<hr>');
  return $newProject;
};

projects.sort(function(a,b) {
  return (new Date(b.dateCreated)) - (new Date(a.dateCreated));
});

projects.forEach(function(portolioObjs) {
  projectsDisplay.push(new PortfolioCreate(portolioObjs));
});
projectsDisplay.forEach(function(project) {
  $('#projects').append(project.toHtml());
});


$(document).ready(function() {
  $('.lnr-menu').on('click', function(){
    // $('#main-nav').removeClass();
    $('#main-nav').toggleClass('show-menu');
  })
});
