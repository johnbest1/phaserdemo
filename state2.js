demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){}, 
    create: function(){
         game.stage.backgroundColor="rgb(244, 144, 27)";
         addChangeStateEventListeners();
    }, 
    update: function(){}
};