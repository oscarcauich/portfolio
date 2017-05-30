'use strict';
var app = app || {};


//This is my middleware js
page('/project', app.projectController.init);
page('/about', app.aboutController.init);

page();
