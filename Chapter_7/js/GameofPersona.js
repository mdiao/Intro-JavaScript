// Create an object
var persona= {
    
    //Initialization of the Persona
    initPersona: function(name, health, strength){
    this.name= name;
    this.health = health;
    this.strength = strength;
     
    }
};

var Player = Object.create(persona);
    // Initialization of the Player
    Player.initPlayer= function(name, health, strength, xp){
        this.initPersona(name, health, strength);
        this.xp=0;
};
    
    
    //Return the description of the Player
    Player.describe= function (){
        var description = this.name + " has " + this.health + " and " + this.strength + " strength " + " and " + this.xp + " points of experience";
        return description;
    
};

var Adversary = Object.create(persona);
    //Initialization of the Oponent
    Adversary.initAdversary= function(name, health, strength, race, value){
          
        this.initPersona (name, health, strength);
        this.race = race;
        this.value = value;
};


var Player1 = Object.create (Player);
Player1.initPlayer("Aurora", 150, 25);

var Player2 = Object.create (Player);
Player2.initPlayer("Glacius", 130, 30, 10);

var Monster= Object.create (Adversary);
Monster.initAdversary ("ZogZog", 40, 20, "orc", 10);


console.log (Player1.describe());
console.log (Player2.describe());
console.log ("An ugly monster is arriving : It's a " + Monster.race + " named " + Monster.name);