class Player{
    constructor(){
        this.index = null;
        this.Name =  null;
        this.distance = 0;
    }
    getCount(){
        var countref = database.ref('playersAMT');
        countref.on('value',function(ok2){
            playersAMT = ok2.val();
        })
    }
    updateCount(ok3){
        database.ref('/').update({playersAMT:ok3})
    }
    Update(){
        var playerIndex = "players/player" + playersAMT;
        database.ref(playerIndex).set({Name:this.Name
            ,distance:this.distance,})
        
    }
    static getPplInfo(){
        var playerref = database.ref("players");
        playerref.on('value',(data)=>{
            allPlayers = data.val();
        })
    }
}