class game{
    constructor(){


    }
    getState(){
        
        var gameStateref=database.ref('gameState')
        gameStateref.on("value",function(data){
         gameState = data.val()

        })

    }
    update(State){
        database.ref('/').update({gameState:State})
    }
    async start(){
        if(gameState===0){
            player1=new player()
            player1.getCount();
            var PlayerCountref=await database.ref('PlayerCount').once("value")
            if(PlayerCountref.exists()){
                PlayerCount=PlayerCountref.val();
                player1.getCount()
            }
            form1=new form()
            form1.display()
        }
        
            }
    play(){

        form1.hide()
        textSize(30)
        text("gameStart",120,100)
        player.getplayerinfo();

        if(allplayers!==undefined){

            var display_position=130
            for(var plr in allplayers){
                if(plr=== "player1"+player1.index)
                    fill("red");

                
                else
                    fill("black");

                    display_position+=20
                    textSize(15)
                    text(allplayers[plr].name+":"+allplayers[plr].distance,120,display_position)
                
            }
           

            
        }
        if(keyIsDown(UP_ARROW)&& player1.index!==null){


            player1.distance+=50
            player1.update;

        }
        
    
    }


  
}