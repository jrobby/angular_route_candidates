/**
 * Created by robbynewman on 1/21/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(request, response){
    var joinedPath = path.join(__dirname, '../public/views/index.html');
    console.log('Joined path', joinedPath);

    response.sendFile(joinedPath);
});

router.get('/*', function(request, response){
    response.redirect('/');
});

module.exports = router;