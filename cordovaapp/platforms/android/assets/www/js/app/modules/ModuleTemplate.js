define([

], function(

){
    function ModuleTemplate(settings){
        var defaults = {

        };
        
        var module_template = {
            settings: {},

            DOM: {},
            
            init: function(){
                _.bindAll.apply(_, [this].concat(_.functions(this)));
                
                $.extend(this.settings, defaults, settings);
            }
        };
        
        module_template.init();
        
        return module_template;
    }

    return ModuleTemplate;
});
