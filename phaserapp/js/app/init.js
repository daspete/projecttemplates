var APPLICATION = APPLICATION || {};

require.config({

    urlArgs: 'cache='+(new Date()).getTime(),

    baseUrl: 'js/app',

    paths: {
        jquery: '../../vendor/jquery/dist/jquery',
        TweenMax: '../../vendor/gsap/src/uncompressed/TweenMax',
        underscore: '../../vendor/underscore/underscore',
        backbone: '../../vendor/backbone/backbone',
        phaser: '../../vendor/phaser/build/custom/phaser-arcade-physics'
    },

    shim: {
        phaser: {
            exports: 'Phaser'
        }
    },

    deps: [
        'boot'
    ]
});