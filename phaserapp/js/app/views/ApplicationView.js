define([
    'backbone',
    'router/ApplicationRouter',
    'views/abstract/AbstractView',
    'modules/PhaserGame'
], function(
    Backbone,
    ApplicationRouter,
    AbstractView,
    PhaserGame
){
    var ApplicationView=AbstractView.extend({

        el: 'body',

        router: null,

        game: null,

        initialize: function(){
            this.cid='application_view';

            AbstractView.prototype.initialize.call(this);

            this.initRouter();
            this.initGame();
        },
        
        setURL: function(url){
            Backbone.history.navigate('#'+url);
        },

        initRouter: function(){
            this.router=new ApplicationRouter({ view: this });
            Backbone.history.start({ pushState: false });
        },

        initGame: function(){
            this.game = new PhaserGame();
        }
    });

    return ApplicationView;
});