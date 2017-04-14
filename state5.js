demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){}, 
    create: function(){
        game.stage.backgroundColor="rgb(226, 240, 114)";
        addChangeStateEventListeners();
    }, 
    update: function(){}
};