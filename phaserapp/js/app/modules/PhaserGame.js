define([
    'phaser'
], function(
    Phaser
){
    function PhaserGame(settings){
        var defaults = {

        };
        
        var phaser_game = {
            settings: {},

            DOM: {},

            game: null,
            
            init: function(){
                _.bindAll.apply(_, [this].concat(_.functions(this)));
                
                $.extend(this.settings, defaults, settings);

                this.game = new Phaser.Game(1280, 720, Phaser.AUTO, '', {
                    preload: this.preload,
                    create: this.create
                });
            },

            preload: function(){

            },

            create: function(){
                this.setScaleMode();
            },

            setScaleMode: function(){
                this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.game.scale.pageAlignHorizontally = true;
                this.game.scale.pageAlignVertically = true;
            }
        };
        
        phaser_game.init();
        
        return phaser_game;
    }

    return PhaserGame;
});