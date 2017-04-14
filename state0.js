var demo ={};
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){}, 
    create: function(){
        game.stage.backgroundColor="rgb(244, 15, 94)";
        addChangeStateEventListeners();
    }, 
    update: function(){}
};

function changeState(i,stateNum){
    game.state.start('state' + stateNum);
}

function addKeyCallback(key,fn,args) {
    game.input.keyboard.addKey(key).onDown.add(fn,null,null,args);
}

function addChangeStateEventListeners(){
    addKeyCallback(Phaser.keyboard.Zero,changeState,0);
    addKeyCallback(Phaser.keyboard.One,changeState,1); 
    addKeyCallback(Phaser.keyboard.Two,changeState,2); 
    addKeyCallback(Phaser.keyboard.Three,changeState,3); 
    addKeyCallback(Phaser.keyboard.Four,changeState,4);
    addKeyCallback(Phaser.keyboard.Five,changeState,5);
    addKeyCallback(Phaser.keyboard.Six,changeState,6); 
    addKeyCallback(Phaser.keyboard.Seven,changeState,7); 
    addKeyCallback(Phaser.keyboard.Eight,changeState,8);
    addKeyCallback(Phaser.keyboard.Nine,changeState,9);
}