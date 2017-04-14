demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){}, 
    create: function(){
        game.stage.backgroundColor="rgb(146, 144, 193)";
        addChangeStateEventListeners();
    }, 
    update: function(){}
};