var APPLICATION = APPLICATION || {};

require.config({
    urlArgs: 'cache='+(new Date()).getTime(),
    baseUrl: 'js/app',

    paths: {
        jquery: '../../vendor/jquery/dist/jquery',
        TweenMax: '../../vendor/gsap/src/uncompressed/TweenMax',
        underscore: '../../vendor/underscore/underscore',
        backbone: '../../vendor/backbone/backbone'
    },

    deps: [
        'boot'
    ]
});