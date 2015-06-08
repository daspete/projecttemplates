module.exports=function(grunt){
    grunt.initConfig({
       
        requirejs: {
            app: {
                options: {
                    baseUrl: 'public/js/app', // APP BASE DIRECTORY
                    mainConfigFile: 'public/js/app/init.js', // THE FILE WHERE THE MODULE PATHS ARE DEFINED
                    name: 'init', // THE INITIALIZE FILE
                    out: 'public/js/builtapp/app.js', // THE OUTPUT FILE
                    generateSourceMaps: true,
                    preserveLicenseComments: false,
                    optimize: 'uglify2' // USE THE UGLIFY ALGO TO MINIFY THE JS
                }
            }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    
    grunt.registerTask('default', ['requirejs']); // BUILD ALL

};