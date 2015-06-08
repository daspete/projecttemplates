module.exports = function(config, app){
    app.get('/', function(req, res){
        res.render('home', {
            config: config
        });
    });
};