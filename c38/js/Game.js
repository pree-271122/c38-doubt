/*CONTAINS
1. States of game
    1. Wait/0 => displayes the form
    2. Play/1 => displayes the game
    3. End/2 => displayed the leaderboard
*/
class Game{
  constructor(){

  }
  display(){
    
  }

  getState(){
    //read gamestate values from database
    /* Database query has 4 basic functions
    1. .ref() => gives location of database from where we need to write or read data
    2. .on() => LISTENER , checks for any change in the given location .ref()
    3. .val() => copies the values from database field to global variable
    4. .update() / .set() => update the values in the database 
    */

    var gameref = database.ref("gameState");
    gameref.on("value",function(data){
      gamestate =data.val();
    })
  }

  updateState(state){
    //write the gamestate values to the database
    database.ref("/").update({
      gameState:state
    })
    // "/" is location of root in the database, while updating we have to give the parent node
  }

  //game is displayed depending on the gameState
  
  start(){
    //when 0 => Form and player object is created , display form and get player name
    form=new Form();
    form.display();

    player=new Player();
    playercount = player.getCount();

    //create the car sprites 
    //preload the image and add here
    //create array to store both cars together

    car1=createSprite(width/2-100,height/2+290);
    car1.addImage("car1",car1img)
    car1.scale=0.2;

    car2=createSprite(width/2+100,height/2+290);
    car2.addImage("car2",car2img)
    car2.scale=0.2;

    cararray=[car1,car2]
    
  }

  play(){
    /*
    1. display the track image
    2. display the sprites
    3. hide the form objets also write hide() in form
    */

    this.handelForm();

    

    //static so call with class name
    Player.getPlayerInfo();

    if(allplayers !== undefined){
      image(trackimg,0,-height*5,width,height*6);

      /*MAKING PLAYER POSITION CHANGE
      1. create index var as 0 to get cars from car array
      2. for loop to place cars at their starting position
      2. 
      */
      var index=0;
      for(var plr in allplayers){
        index=index+1;
        var x = allplayers[plr].x;
        var y =  height - allplayers[plr].y;

        cararray[index - 1].position.x=x;
        cararray[index - 1].position.y=y;

        //pink circle for the car
    if(index===player.index){
      stroke(10);
      fill("pink");
      ellipse(x,y,60,60);
   
    //changing camera postion in y direction
    //camera.x=width/2;
    camera.position.y =cararray[index-1].position.y;
      }
    }

    this.handelControls();

    drawSprites();
  }
  }
  handelForm(){
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("titleEffectinPlay");
  }
  handelControls(){
    //handling keyboard events to control the player
    if(keyDown("up")){
      player.y += 10;
      player.updatePosition();
    }
  }
  leaderboard(){

  }
}