/*CONTAINS
1. Input box
2. Login button => pressed => player name get registered in database
                           =>  and new player created
*/
class Form{
  constructor(){
    this.input = createInput("").attribute("placeholder","Enter your name");
    this.platButton = createButton("PLAY");
    this.titleImg=createImg("./assets/title.png","game title");
    this.greeting= createElement("h2");
  }
  setElementPosition(){
    this.titleImg.position(120,160);
    this.input.position(width/2-110,height/2-80);
    this.platButton.position(width/2-90,height/2-20);
    this.greeting.position(width/2-300,height/2-100)
  }
  setElementStyle(){
    this.titleImg.class("gametitle");
    this.input.class("inputbox");
    this.platButton.class("playbutton");
    this.greeting.class("greetingmessage")
  }
  handlemousepressed(){
    this.platButton.mousePressed(()=>{
      this.input.hide();
      this.platButton.hide();
      var message= "Hello"+ " " +this.input.value();
      this.greeting.html(message);

      //track the number of players joined 
      //increase the playercount

      playercount=playercount+1
      player.name = this.input.value();
      player.index=playercount;
      player.addplayers();
      player.updateCount(playercount)

      player.getDistance();
    })
  }
  display(){
    this.setElementPosition();
    this.setElementStyle();
    this.handlemousepressed()
  }

  hide(){
    this.input.hide();
    this.platButton.hide();
    this.greeting.hide();
  }
}