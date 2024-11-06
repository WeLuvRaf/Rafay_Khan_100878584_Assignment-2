var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', body: '' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me', body: '' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', body: '' });
});


router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me', body: '' });
});

module.exports = router;
