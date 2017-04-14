demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){}, 
    create: function(){
        game.stage.backgroundColor="rgb(250, 194, 40)";
        addChangeStateEventListeners();
    }, 
    update: function(){}
};