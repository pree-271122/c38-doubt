/*CONTAINS
1. player object created everytime new player login
2. collects player informations => name,position in game
3. Name property=> read write player info on database => Player name , player count
*/
class Player{
  constructor(){
    //properties of player
    this.name = null;
    this.index=null;
    this.x=0;
    this.y=0;
  }
  display(){
    
  }
  addplayers(){
    /*
    1. creates new entries in database
    2. player index was 1 , the database entry will be created as player1 
    */

    var playerindex = "players/buddy" + this.index;

    if(this.index===1){
      this.x=width/2-100;
    }
    else{
      this.x=width/2+100;
    }

    database.ref(playerindex).set({
      name:this.name,
      x:this.x,
      y:this.y
    })
  }

  //To read and update the player count

  getCount(){
    //reads the playerCount in database
    var getcount = database.ref("playerCount");
    getcount.on("value",function(data){
      playercount = data.val()
    })
  }
  updateCount(count){
    //writes the playerCount in database
    database.ref('/').update({
      playerCount:count
    })
  }

  updatePosition(){
    //write the position in database according to movement with up key
    var playerpos= "players/buddy"+this.index;
    database.ref(playerpos).update({
      x:this.x,
      y:this.y,
    })
  }

  getDistance(){
    //read the distance , allows on player to see position of other
    //call this in form
    var playerdistance=database.ref('players/buddy'+this.index);
    playerdistance.on("value",data=>{
      this.x=data.x,
      this.y=data.y
    })
  }

  static getPlayerInfo(){
    /*
    1. declare allplayers var global
    2. queries to get info from database
    3. this is a static function => does not need to be called by each object
    4.  use class name to call
    */

    var playerinfo= database.ref("players");
    playerinfo.on("value",data=>{
      allplayers=data.val();
    })
  }
}