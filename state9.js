demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){}, 
    create: function(){
        game.stage.backgroundColor="rgb(230, 12, 239)";
        addChangeStateEventListeners();
    }, 
    update: function(){}
};