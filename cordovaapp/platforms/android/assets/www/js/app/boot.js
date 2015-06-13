define([
	'modules/LogModule',
    'views/ApplicationView'
], function(
	LogModule,
    ApplicationView
){

    document.addEventListener('deviceready', function(){
        
        var log_module = new LogModule();
        var application_view=new ApplicationView();
        alert('hooray');
    }, false);	

    
});