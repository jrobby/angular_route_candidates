/**
 * Created by robbynewman on 1/21/16.
 */
var express = require('express');
var app = express();
var index = require('./routes/index');

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('listening on port', port);
});

app.use(express.static('server/public'));

app.use('/', index);