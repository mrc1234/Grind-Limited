// Requiring path to so we can use relative routes to our HTML files
var path = require('path');

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require('../config/middleware/isAuthenticated');

//var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get('/', function(req, res) {
    var isAuth = false;
    if (req.user) {
      isAuth = true;
    }
    res.render('index', {
      loggedin: isAuth
    });
  });

  // Load index page
  app.get('/index', function(req, res) {
    var isAuth = false;
    if (req.user) {
      isAuth = true;
    }
    res.render('index', {
      loggedin: isAuth
    });
  });

  //html routes for the sign up page
  app.get('/signup', function(req, res) {
    var isAuth = false;
    if (req.user) {
      isAuth = true;
    }
    res.render('signup', {
      loggedin: isAuth
    });
  });

  app.get('/login', function(req, res) {
    if (req.user) {
      res.redirect('/survey');
    }
    res.sendFile(path.join(__dirname, '../public/login.html'));
  });
  //html to show the outcome after user answered survey
  app.get('/result', function(req, res) {
    console.log('get result');
    res.render('result');
  });

  // Load the survey page
  app.get('/survey', function(req, res) {
    var isAuth = false;
    if (req.user) {
      isAuth = true;
    }
    res.render('survey', {
      loggedin: isAuth
    });
  });

  // Load the services (APIs) page
  app.get('/services', function(req, res) {
    var isAuth = false;
    if (req.user) {
      isAuth = true;
    }
    res.render('services', {
      loggedin: isAuth
    });
  });
  // Load the program pageisAuthenticated
  app.get('/program', function(req, res) {
    var isAuth = false;
    if (req.user) {
      isAuth = true;
    }
    res.render('program', {
      loggedin: isAuth
    });
  });
  // Load the about page
  app.get('/about', function(req, res) {
    var isAuth = false;
    if (req.user) {
      isAuth = true;
    }
    res.render('about', {
      loggedin: isAuth
    });
  });
  // Render 404 page for any unmatched routes
  app.get('*', function(req, res) {
    res.render('404');
  });
};
