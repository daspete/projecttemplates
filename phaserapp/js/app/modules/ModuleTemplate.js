(
    function(root, factory){
        if (typeof define === "function" && define.amd){ // AMD ready
            define([
                
            ], factory);
        }else if(typeof exports === 'object'){ // nodejs
            module.exports=factory(
                
            ));
        }else{ // NO-AMD
            root.ModuleTemplate=factory(
                
            );
        }
    }(this, function(
        
    ){    
        function ModuleTemplate(settings){
            var defaults={

            };
            
            var module_template={
                settings: {},

                DOM: {},
                
                init: function(settings, defaults){
                    _.bindAll.apply(_, [this].concat(_.functions(this)));

                    $.extend(this.settings, defaults, settings);

                    this.setup();
                },

                setup: function(){

                }
            };
            
            if(typeof settings === "undefined"){
                settings=defaults;
            }

            module_template.init(settings, defaults);
            
            return module_template;
        }

        return ModuleTemplate;
    })
);