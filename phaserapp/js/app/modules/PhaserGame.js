(
    function(root, factory){
        if (typeof define === "function" && define.amd){ // AMD ready
            define([
                'phaser'
            ], factory);
        }else if(typeof exports === 'object'){ // nodejs
            module.exports=factory(
                
            );
        }else{ // NO-AMD
            root.PhaserGame=factory(
                
            );
        }
    }(this, function(
        Phaser
    ){    
        function PhaserGame(settings){
            var defaults={

            };
            
            var phaser_game={
                settings: {},

                DOM: {},

                game: null,
                
                init: function(settings, defaults){
                    _.bindAll.apply(_, [this].concat(_.functions(this)));

                    $.extend(this.settings, defaults, settings);

                    this.setup();
                },

                setup: function(){
                    this.game = new Phaser.Game(1280, 720, Phaser.AUTO, '', {
                        preload: this.preload,
                        create: this.create
                    });
                },

                preload: function(){
                    log(this);
                },

                create: function(){
                    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                    this.game.scale.pageAlignHorizontally = true;
                    this.game.scale.pageAlignVertically = true;

                    
                }
            };
            
            if(typeof settings === "undefined"){
                settings=defaults;
            }

            phaser_game.init(settings, defaults);
            
            return phaser_game;
        }

        return PhaserGame;
    })
);