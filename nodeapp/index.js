var extend   = require('extend'),
    config   = require('./app/config.js'),
    express  = require('express'),
    engines  = require('consolidate'),
    http     = require('http'),
    socketio = require('socket.io'),

    app      = express(),
    server   = http.Server(app),
    io       = socketio(server)
;



app.engine('html', engines.swig);
app.use(express.static('public'));
app.set('views', './app/views');
app.set('view engine', 'html');




var routes = require('./app/routes.js')(
    config,
    app
);


var sockets = require('./app/sockets.js')(io);



server.listen(config.server.port, function(){
    console.log('listening on: ' + config.server.port);
});
