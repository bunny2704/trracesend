var ball;
var PlayerCount;
var database,position;
var gameState=0,form1,game1,player1,allplayers;

var distance=0;
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    game1=new game()
    game1.getState();
    game1.start();
    
  
  //  ball = createSprite(250,250,10,10);
   // ball.shapeColor = "red";
   // var lococ=database.ref("Ball/Position");
 //   lococ.on("value",readop,showerror)
  
}

function draw(){
    background("white");
    if(PlayerCount===4){
      game1.update(1);
    }
    if(gameState===1){
      clear()
      game1.play();
    }
   // if(keyDown(LEFT_ARROW)){
   //     writePosition(-1,0);
  //  }
  //  else if(keyDown(RIGHT_ARROW)){
  //      writePosition(1,0);
  //  }
  //  else if(keyDown(UP_ARROW)){
  //      writePosition(0,-1);
  //  }
  //  else if(keyDown(DOWN_ARROW)){
  //     writePosition(0,+1);
  //  }
    drawSprites();
}

//function writePosition(x,y){
 //   database.ref("Ball/Position").set(
    //    {x:ball.x+x,y:ball.y+y}
    //    )
  //  ball.x = ball.x + x;
   // ball.y = ball.y + y;
//}
//function readop(data){
//    position=data.val()
  //  ball.x=position.x
  //  ball.y=position.y
//}
//function showerror(){
//console.log("error")


//}