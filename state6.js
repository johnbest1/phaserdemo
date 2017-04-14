demo.state6 = function(){};
demo.state6.prototype = {
    preload: function(){}, 
    create: function(){
        game.stage.backgroundColor="rgb(4, 2, 42)";
        addChangeStateEventListeners();
    }, 
    update: function(){}
};