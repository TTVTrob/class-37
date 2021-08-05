class Game{
    constructor(){

    }
    getstate(){
        var Gamestateref = database.ref('Gamestate');
        Gamestateref.on('value', function(data){
            Gamestate = data.val();
        })
    }
    update(ok){
        database.ref('/').update({
            Gamestate:ok,
        })        
    }
    async start(){
        if (Gamestate === 0 ){
            var form = new Form();
            form.display();
            player = new Player();
            var plr = await database.ref('playersAMT').once('value');
            if(plr.exists()){
                player.getCount();
                playerAMT = plr.val();
            }
        }
    }
    play(){
        form.hide();
        Player.getPplInfo();
        text("the game has started",400,100);
        if(allPlayer !== undefined){
            var dPosition = 250;
            for (var i in allPlayers){
                dPosition += 50;
                if(i === "player" + player.index){
                    fill('yellow');
                }
                else{
                    fill('black');
                }
            }
            text(allPlayer[i].name+"-"+allPlayer[i].distance,250,100);
        }
        if(keyDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.Update();
        }
    }
    
}