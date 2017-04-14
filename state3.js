demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){}, 
    create: function(){
        game.stage.backgroundColor="rgb(110, 238, 248)";
        addChangeStateEventListeners();
    }, 
    update: function(){}
};