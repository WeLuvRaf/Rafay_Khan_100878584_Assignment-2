var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', body: '<h1>Welcome to My Portfolio</h1><p>This is the Home page</p>' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me', body: '<h1>About Me</h1><p>This is the About Me page.</p>' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', body: '<h1>My Projects</h1><p>This page showcases my projects.</p>' });
});


router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me', body: '<h1>Contact Me</h1><p>Feel free to reach out!</p>' });
});

module.exports = router;
