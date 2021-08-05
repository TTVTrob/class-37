var game, Gamestate = 0, playersAMT, player, distance = 0, allPlayers;
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game ();
  game.getstate();
  game.start();
}

function draw(){
  background("white");
  if(playersAMT == 2){
    game.update(1);
    game.play();
  } 
}
