demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){}, 
    create: function(){
        game.stage.backgroundColor="rgb(24, 242, 32)";
        addChangeStateEventListeners();
    }, 
    update: function(){}
};