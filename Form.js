class Form {
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("play");
        this.greeting = createElement('h2');
    }
    display(){
        var title = createElement('h2');
        title.html("CAR RACING GAME :)");
        title.position(450,10);
        this.input.position(450,150);
        this.button.position(575,175);
        this.button.mousePressed(()=>{
            //var namestr = this.input.value();
            player.name = this.input.value();
            this.greeting.html('Hello ' + player.name);
            playersAMT = playersAMT + 1;
            player.Update();
            player.updateCount(playersAMT);
            this.greeting.position(550,250);
            
        });
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide()
    }
}