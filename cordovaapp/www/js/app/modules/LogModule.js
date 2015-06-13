define([

], function(

){
    function LogModule(){
        var log_module = {
            init: function(){
                _.bindAll.apply(_, [this].concat(_.functions(this)));

                if(typeof window.console === 'undefined' || typeof window.console.log === 'undefined') {
                    window.console = {
                        log: function(o){},
                        dir: function(o){}
                    };
                }

                if(Function.prototype.bind){
                    log = Function.prototype.bind.call(window.console.log, window.console);
                    dir = Function.prototype.bind.call(window.console.dir, window.console);
                }else{
                    log = function(){
                        Function.prototype.apply.call(window.console.log, window.console, arguments);
                    }
                    dir = function(){
                        Function.prototype.apply.call(window.console.dir, window.console, arguments);
                    }
                }
            }
        };
        
        log_module.init();
        
        return log_module;
    }

    return LogModule;
}); 