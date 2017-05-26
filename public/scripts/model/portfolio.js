'use strict';

var app = app || {};

(function(module){
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
    var template = Handlebars.compile(getTemplate);

    this.daysAgo = parseInt((new Date() - new Date(this.dateCreated))/60/60/24/1000);
    this.dateCreated = this.dateCreated ? `published ${this.daysAgo} days ago` : '(draft)';

    return template(this);
  };

  PortfolioCreate.loadAll = rows => {
    rows.sort((a, b) => (new Date(b.publishedOn)) - (new Date(a.publishedOn)));

    PortfolioCreate.all = rows.map((portfolio) => new PortfolioCreate(portfolio));
  };

  PortfolioCreate.fetchAll = function() {
    if (localStorage.projectsData) {
      let jsonData = JSON.parse(localStorage.projectsData);
      PortfolioCreate.loadAll(jsonData);
      projectView.initIndexPage();

    } else {
      let jsonData = '/data/projects.json';
      $.getJSON(jsonData)
          .then(function(projectsData) {
            localStorage.projectsData = JSON.stringify(projectsData);
            PortfolioCreate.loadAll(projectsData);
            projectView.initIndexPage();
          }, function(err) {
            console.error(err);
          })
    }
  };

  PortfolioCreate.funFacts = function funFact(){
    let myName = 'Oscar Cauich'
    let newName = myName.split(' ').join().replace(/,/, '');
    let tempName = newName.split('');
    let letterCount = tempName.reduce((initial) => initial += 1, 0)
    return 'My Name has ' + letterCount + ' characters';
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

  module.PortfolioCreate = PortfolioCreate;
})(app)
