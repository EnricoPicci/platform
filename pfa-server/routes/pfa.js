var express = require('express');
var router = express.Router();

var DataServer = require('../servers/DataServer');


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening here.');
    next(); // make sure we go to the next routes and don't stop here
});
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});

/* GET home page. */
router.get('/pfa', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*******************************************
 * START Profile services
 *******************************************/
 /*
 * POST to save profile.
 */
router.post('/profile/save', function(req, res) {
    var profile = req.body;
    DataServer.getSingleton().saveProfile(profile, res);
});
/*
 * GET templates for a profile.
 */
router.get('/profile/templates', function(req, res) {
    var profile = req.body;
    DataServer.getSingleton().getTemplates(profile, res);
});
/*******************************************
 * END Profile services
 *******************************************/
 


module.exports = router;
