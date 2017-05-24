'use strict';
var app = app || {};

page('/project', app.projectController.init);
page('/about', app.aboutController.init);

page();
