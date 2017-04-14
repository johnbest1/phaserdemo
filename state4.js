demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){}, 
    create: function(){
        game.stage.backgroundColor="rgb(92, 242, 161)";
        addChangeStateEventListeners();
    }, 
    update: function(){}
};